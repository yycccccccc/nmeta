# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
# implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
This module is part of the nmeta suite
.
It defines a custom traffic classifier
.
To create your own custom classifier, copy this example to a new
file in the same directory and update the code as required.
Call it from nmeta by specifying the name of the file (without the
.py) in main_policy.yaml
.
Classifiers are called per packet, so performance is important
.
"""

class Classifier(object):
    """
    A custom classifier module for import by nmeta
    """
    def __init__(self, logger):
        """
        Initialise the classifier
        """
        self.logger = logger

    def classifier(self, classifier_result, flow, ident):
        """
        A really basic statistical classifier to demonstrate ability
        to differentiate 'bandwidth hog' flows from ones that are
        more interactive so that appropriate classification metadata
        can be passed to QoS for differential treatment.
        .
        This method is passed:
        * A TCClassifierResult class object
        * A Flow class object holding the current flow context
        * An Identities class object
        .
        It updates the TCClassifierResult class object with actions and
        classification_tag
        .
        Only works on TCP.
        """
        #*** Maximum packets to accumulate in a flow before making a
        #***  classification:
        _max_packets = 7
        #*** Thresholds used in calculations:
        _max_packet_size_threshold = 1200
        _interpacket_ratio_threshold = 0.35
        #*** Packets in flow so far:
        packets = flow.packet_count()

        if packets >= _max_packets:
            #*** Reached our maximum packet count so do some classification:
            self.logger.debug("Reached max packets count=%s, finalising",
                                                                       packets)
            #*** Call functions to get statistics to make decisions on:
            _max_packet_size = flow.max_packet_size()
            _max_interpacket_interval = flow.max_interpacket_interval()
            _min_interpacket_interval = flow.min_interpacket_interval()

            #*** Avoid possible divide by zero error:
            if _max_interpacket_interval and _min_interpacket_interval:
                #*** Ratio between largest directional interpacket delta and
                #***  smallest. Use a ratio as it accounts for base RTT:
                _interpacket_ratio = float(_min_interpacket_interval) / \
                                            float(_max_interpacket_interval)
            else:
                _interpacket_ratio = 0
            self.logger.debug("max_packet_size=%s interpacket_ratio=%s",
                        _max_packet_size, _interpacket_ratio)
            #*** Decide actions based on the statistics:
            if (_max_packet_size > _max_packet_size_threshold and
                            _interpacket_ratio < _interpacket_ratio_threshold):
                #*** This traffic looks like a bandwidth hog so constrain it:
                classifier_result.match = True
                classifier_result.continue_to_inspect = False
                classifier_result.actions['qos_treatment'] = 'constrained_bw'
                classifier_result.classification_tag = "Bandwidth hog flow"
            else:
                #*** Doesn't look like bandwidth hog so default priority:
                classifier_result.match = True
                classifier_result.continue_to_inspect = False
                classifier_result.actions['qos_treatment'] = 'default_priority'
                classifier_result.classification_tag = "Normal flow"
            self.logger.debug("Decided on results %s",
                                                   classifier_result.__dict__)
        else:
            self.logger.debug("Continuing to inspect flow_hash=%s packets=%s",
                                                       flow.flow_hash, packets)
            classifier_result.match = True
            classifier_result.continue_to_inspect = True
