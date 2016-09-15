Search.setIndex({envversion:49,filenames:["api","config","dns_experimental","flow","forwarding","index","introduction","lldp-fixed","measure","modules","nmeta","nmisc","qos","switch_abstraction","tc_identity","tc_payload","tc_policy","tc_static","tc_statistical"],objects:{"":{api:[0,0,0,"-"],config:[1,0,0,"-"],dns_experimental:[2,0,0,"-"],flow:[3,0,0,"-"],forwarding:[4,0,0,"-"],measure:[8,0,0,"-"],nmeta:[10,0,0,"-"],nmisc:[11,0,0,"-"],qos:[12,0,0,"-"],switch_abstraction:[13,0,0,"-"],tc_identity:[14,0,0,"-"],tc_payload:[15,0,0,"-"],tc_policy:[16,0,0,"-"],tc_static:[17,0,0,"-"],tc_statistical:[18,0,0,"-"]},"api.Api":{IP_PATTERN:[0,2,1,""],url_data_size_rows:[0,2,1,""],url_flowtable:[0,2,1,""],url_flowtable_augmented:[0,2,1,""],url_flowtable_by_ip:[0,2,1,""],url_identity_ip:[0,2,1,""],url_identity_mac:[0,2,1,""],url_identity_nic_table:[0,2,1,""],url_identity_service:[0,2,1,""],url_identity_system_table:[0,2,1,""],url_measure_event_rates:[0,2,1,""],url_measure_pkt_time:[0,2,1,""]},"api.NotFoundError":{message:[0,2,1,""]},"api.RESTAPIController":{get_data_structure_size_rows:[0,4,1,""],get_event_rates:[0,4,1,""],get_id_ip:[0,4,1,""],get_id_mac:[0,4,1,""],get_id_service:[0,4,1,""],get_packet_time:[0,4,1,""],list_flow_table:[0,4,1,""],list_flow_table_augmented:[0,4,1,""],list_flow_table_by_IP:[0,4,1,""],list_identity_nic_table:[0,4,1,""],list_identity_system_table:[0,4,1,""]},"config.Config":{get_value:[1,4,1,""]},"dns_experimental.DNS":{parse_dns:[2,4,1,""]},"flow.FlowMetadata":{get_fm_table:[3,4,1,""],get_fm_table_size_rows:[3,4,1,""],maintain_fm_table:[3,4,1,""],update_flowmetadata:[3,4,1,""]},"forwarding.Forwarding":{basic_switch:[4,4,1,""]},"measure.Measurement":{get_event_metric_stats:[8,4,1,""],get_event_rate:[8,4,1,""],get_event_rates:[8,4,1,""],kick_the_metric_buckets:[8,4,1,""],kick_the_rate_buckets:[8,4,1,""],record_metric:[8,4,1,""],record_rate_event:[8,4,1,""]},"nmeta.NMeta":{OFP_VERSIONS:[10,2,1,""],_CONTEXTS:[10,2,1,""],_add_flow:[10,4,1,""],_packet_in_debug:[10,4,1,""],_packet_in_handler:[10,4,1,""],desc_stats_reply_handler:[10,4,1,""],error_msg_handler:[10,4,1,""],switch_connection_handler:[10,4,1,""]},"qos.QoS":{check_policy:[12,4,1,""],validate_policy:[12,4,1,""]},"switch_abstraction.SwitchAbstract":{add_flow:[13,4,1,""],add_flow_eth:[13,4,1,""],add_flow_ip:[13,4,1,""],add_flow_tcp:[13,4,1,""],get_actions:[13,4,1,""],get_flow_match:[13,4,1,""],get_friendly_of_version:[13,4,1,""],get_in_port:[13,4,1,""],packet_out:[13,4,1,""],request_switch_desc:[13,4,1,""],set_switch_config:[13,4,1,""],set_switch_table_miss:[13,4,1,""]},"tc_identity.IdentityInspect":{arp_reply_in:[14,4,1,""],check_identity:[14,4,1,""],dhcp_in:[14,4,1,""],dns_reply_in:[14,4,1,""],get_augmented_fm_table:[14,4,1,""],get_identity_nic_table:[14,4,1,""],get_identity_system_table:[14,4,1,""],ip4_in:[14,4,1,""],lldp_in:[14,4,1,""],maintain_identity_tables:[14,4,1,""],valid_id_ip_service:[14,4,1,""]},"tc_payload.PayloadInspect":{check_payload:[15,4,1,""],maintain_fcip_table:[15,4,1,""]},"tc_policy.TrafficClassificationPolicy":{check_policy:[16,4,1,""],validate_policy:[16,4,1,""]},"tc_static.StaticInspect":{check_static:[17,4,1,""],is_match_ethertype:[17,4,1,""],is_match_ip_space:[17,4,1,""],is_match_macaddress:[17,4,1,""],is_valid_ethertype:[17,4,1,""],is_valid_ip_space:[17,4,1,""],is_valid_macaddress:[17,4,1,""],is_valid_transport_port:[17,4,1,""]},"tc_statistical.StatisticalInspect":{check_statistical:[18,4,1,""],maintain_fcip_table:[18,4,1,""]},api:{Api:[0,1,1,""],NotFoundError:[0,3,1,""],RESTAPIController:[0,1,1,""],rest_command:[0,5,1,""]},config:{Config:[1,1,1,""]},dns_experimental:{DNS:[2,1,1,""]},flow:{FlowMetadata:[3,1,1,""]},forwarding:{Forwarding:[4,1,1,""]},measure:{Measurement:[8,1,1,""]},nmeta:{NMeta:[10,1,1,""],_port_status_handler:[10,5,1,""],ipv4_text_to_int:[10,5,1,""]},nmisc:{AutoVivification:[11,1,1,""]},qos:{QoS:[12,1,1,""]},switch_abstraction:{SwitchAbstract:[13,1,1,""]},tc_identity:{IdentityInspect:[14,1,1,""]},tc_payload:{PayloadInspect:[15,1,1,""]},tc_policy:{TrafficClassificationPolicy:[16,1,1,""]},tc_static:{StaticInspect:[17,1,1,""]},tc_statistical:{StatisticalInspect:[18,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","method","Python method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:exception","4":"py:method","5":"py:function"},terms:{"abstract":[6,13],"boolean":14,"byte":[13,17],"class":[0,1,2,3,4,8,10,11,12,13,14,15,16,17,18],"function":[0,3,4,13,14,15,16,18],"new":6,"public":[],"return":[0,1,2,3,4,8,12,13,14,15,16,17,18],"static":17,"switch":[10,13],"true":14,"while":6,_add_flow:10,_config:[0,2,3,4,8,12,13,14,15,16,17,18],_contexts:10,_dns_payload:2,_flow:14,_nmeta:[0,3],_packet_in_debug:10,_packet_in_handl:10,_port_status_handl:10,_wsgi:0,abil:6,abl:[],about:6,access:[0,1],action:[3,6,12,13,16,18],activ:6,adapt:6,add:[3,10,12,13,14],add_flow:13,add_flow_eth:13,add_flow_ip:13,add_flow_tcp:13,addit:16,address:[10,14,17],after:16,against:[12,13,16],all:8,also:[12,16],ani:[3,12,13,14,15,16,17,18],anoth:[],answer:14,api:[],app:[0,10],app_manag:10,appli:[3,13],applic:[],appropri:[0,12,13,14,15,18],arg:[0,10],argument:13,around:6,arp:14,arp_reply_in:14,arped_ip:14,arped_mac:14,assign:3,associ:16,assum:16,attribut:[14,15,16,17,18],augment:[0,14],autovivif:11,avg:8,base:[0,1,2,3,4,6,8,10,11,12,13,14,15,16,17,18],basic_switch:4,been:[10,16],befor:6,behaviour:13,belief:6,belong:17,between:13,bill:6,block:[],both:[6,17],bring:6,bucket:8,bucket_max_ag:8,buffer:13,buffer_id:13,bug:6,build:13,busi:[],call:[1,13,16],came:13,can:[6,8,17],carri:[6,10],caus:[12,13,16],check:[3,12,14,16,17],check_ident:14,check_payload:15,check_polici:[12,16],check_stat:17,check_statist:18,cidr:17,classif:[1,3,6,10,11,12,14,15,16,17,18],classifi:6,code:[5,6],collect:6,command:0,compar:[3,14,15,18],compat:13,concept:10,concern:[],config:0,config_flag:13,config_kei:1,configur:[1,12],conform:16,connect:[0,10],consider:[],constant:16,consum:6,contain:[1,11,12,15,16,18],content:5,context:14,continue_to_inspect:[15,18],contrari:13,contribut:[],contributor:6,control:[0,1,2,3,4,6,8,10,11,12,13,14,15,16,17,18],controllerbas:0,convers:6,correct:[12,16,17],correl:14,critic:[],ctx:14,current:[3,14,15,18],data:[0,6,8,13,14,16],datapath:13,debat:[],debug:10,decim:17,decis:[4,12],decoupl:6,defin:6,delai:16,delet:[3,8,14,15,18],deploi:6,deploy:10,desc_stats_reply_handl:10,describ:10,descript:[10,13],design:[],desir:[],detail:13,detect:[],determin:12,develop:6,dhcp:14,dhcp_in:14,dict:[11,13],dictionari:[2,8,15,18],differ:[13,17],differenti:[],directori:1,disclaim:[],dns:[2,14],dns_experiment:[],dns_reply_in:14,document:5,doe:[1,16,17],doesn:13,down:16,dpid:[12,14,16],dure:[12,16],effici:16,email:6,emploi:6,encourag:6,end:[],engin:6,enhanc:6,enhancement:[],enrich:6,ensur:[6,12,16],enterpris:[],entri:[3,10,13,14,15,18],equal:[],error:[0,10,12,13,16,17],error_msg_handl:10,etc:11,ethernet:13,ethertyp:[13,17],ethic:6,evalu:12,event:[4,8,10,16],event_typ:8,event_valu:8,eventr:0,everi:16,except:0,exist:[1,16],expect:[1,16],extens:6,extra:6,fact:[],fals:[13,14],fcip:[15,18],featur:[],file:[1,12,16],fine:10,fix:[5,6],flag:13,flood:13,flow:[0,1,2],flow_act:[3,12],flowmetadata:3,flowtabl:0,focus:[],follow:3,form:[1,16],format:[12,16],forward:3,found:6,foundat:6,fragment:[10,13],friendli:13,from:[3,6,10,14,15,18],func:0,gather:16,gener:[6,10,12],get:6,get_act:13,get_augmented_fm_t:14,get_data_structure_size_row:0,get_event_metric_stat:8,get_event_r:[0,8],get_flow_match:13,get_fm_tabl:3,get_fm_table_size_row:3,get_friendly_of_vers:13,get_id_ip:0,get_id_mac:0,get_id_servic:0,get_identity_nic_t:14,get_identity_system_t:14,get_in_port:13,get_packet_tim:0,get_valu:1,github:6,goal:6,grain:10,handl:[10,13],hard_timeout:13,have:[3,6,10,14,15,17,18],hex:17,higher:13,host:14,hostnam:14,how:[],http:6,human:13,hw_desc:13,id_ip:14,ident:[0,1,2,3,4,6,8,10,11,14,15,16,17,18],identiti:14,identityinspect:14,idle_timeout:13,implement:11,in_port:[4,10,13],includ:[6,13],index:5,inform:14,ingest:[1,12,14,16],innov:6,inport:[14,16],instanti:[0,1,2,3,4,8,12,13,14,15,16,17,18],instruct:13,integ:[10,17],intend:6,interact:13,internet:[],introduct:[],ip4_in:14,ip_addr:17,ip_pattern:0,ip_spac:17,ip_text:10,ipv4:[13,14,17],ipv4_text_to_int:10,ipv6:[13,17],is_match_ethertyp:17,is_match_ip_spac:17,is_match_macaddress:17,is_valid_ethertyp:17,is_valid_ip_spac:17,is_valid_macaddress:17,is_valid_transport_port:17,issu:6,issue:6,item:3,kei:1,keyword:13,kick_the_metric_bucket:8,kick_the_rate_bucket:8,know:13,knowledg:6,kwarg:[0,10,13],last:8,layer:6,legal:6,length:[10,17],limit:6,link:0,list:6,list_flow_t:0,list_flow_table_aug:0,list_flow_table_by_ip:0,list_identity_nic_t:0,list_identity_system_t:0,lldp:5,lldp_in:14,look:14,mac:[0,14,17],made:6,mai:6,main:[10,16],main_polici:16,maintain:6,maintain_fcip_t:[15,18],maintain_fm_t:3,maintain_identity_t:14,major:[],make:4,mani:6,manner:[6,8],markedli:[],mask:17,match:[10,13,14,15,16,17,18],max:8,max_ag:3,max_age_fcip:[15,18],maximum:[3,14,15,18],measur:[0,5],meet:[],messag:[0,3,10],meta:6,metadata:[0,1,2,3,4,6,8,10,11,12,14,15,16,17,18],method:[0,1,2,3,4,8,12,13,14,15,16,17,18],metric:[0,8],min:8,miscellan:11,miss:[10,13],miss_send_len:13,mode:6,modul:[],monitor:6,most:[],msg:[0,3,13],multiclassifi:6,name:14,need:[10,13],net:[],network:[0,1,2,3,4,6,8,10,11,14,15,16,17,18],neutral:[],newli:6,nic:14,nictabl:0,nmisc:[5,9],non:13,none:[0,13],note:13,notfounderror:0,number:[3,6,13,17],object:[0,1,2,3,4,8,12,13,14,15,16,17,18],occur:[0,8],ofp_versions:10,ofproto:13,ofv:13,old:[3,8,14,15,18],older:[3,13,14,15,18],onli:6,onlin:6,openflow:13,openvswitch:13,oper:[],opposit:[],option:14,order:[],osrg:6,other:13,otherwis:[13,17],out:13,out_port:[10,13],out_queu:[10,13],outcom:[],output:[4,12,13],ovs:13,own:6,packet:[2,4,10,12,13,14,15,16,17,18],packet_out:13,packet_tim:0,page:5,paramet:14,pars:2,parse_dn:2,part:[0,1,2,3,4,8,11,12,13,14,15,16,17,18],particip:6,particular:[8,16],pass:[1,3,4,12,13,14,15,16,17,18],path:[14,16],payload:[2,15],payloadinspect:15,per:8,perform:16,perl:11,permiss:6,philosophi:[],pkt:[14,15,16,17,18],platform:6,pleas:6,point:13,polici:[6,12,16],policy_attr:[14,15,17,18],policy_valu:[14,15,17,18],port:[4,10,13,14,16,17],possibl:[10,13],practic:13,prefer:10,prevent:13,prioriti:13,prioritis:[],privaci:[],produc:6,product:[6,10],program:[13,16],project:6,pronounc:6,proof:10,properli:[1,10,16],prospect:17,protocol:13,provid:[0,1,2,3,4,6,8,10,11,12,13,14,15,16,17,18],punt:13,purpos:6,qos:[3,6,12],qualiti:12,queri:[14,17],queue:[3,12,13],quit:[],rais:6,rang:17,rate:8,receiv:10,record:8,record_metr:8,record_rate_ev:8,regardless:13,relat:8,relev:14,remov:3,repli:[10,14],req:0,request:[10,13],request_switch_desc:13,requir:[6,13,14],research:6,respons:0,rest:0,rest_command:0,restapicontrol:0,restful:0,result:2,retriev:8,revis:13,risk:6,row:[0,3],rule:[12,13,16],run:[0,1,2,3,4,6,8,10,11,12,13,14,15,16,17,18],ryu:[0,1,2,3,4,6,8,10,11,12,13,14,15,16,17,18],ryuapp:10,ryuexcept:0,safe:13,same:[1,17],sdn:[0,1,2,3,4,6,8,10,11,12,13,14,15,16,17,18],search:[3,5],second:8,secur:6,see:[1,3,6,16,17],self:10,send:13,sent:[10,13],servic:[0,12,14],set:[10,12,13,15,18],set_switch_config:13,set_switch_table_miss:13,share:11,should:[3,6],slow:16,softwar:6,some:10,somewher:13,space:17,special:3,specif:[13,16],specifi:[8,13],stale:14,start:16,stat:8,staticinspect:17,statist:[10,18],statisticalinspect:18,statu:10,still:6,store:8,string:10,strongli:14,structur:14,subdirectori:[1,16],success:13,suggest:6,suit:[0,1,2,3,4,8,10,11,12,13,14,15,16,17,18],suppli:13,sure:13,sw_desc:13,switch_abstract:[5,9],switch_connection_handl:10,switchabstract:13,system:[6,14],systemt:0,tables:0,tailor:13,take:[6,10],talk:0,task:10,tbd:[0,13],tc_ident:[5,9],tc_payload:[5,9],tc_polici:[2,5,9,14,15],tc_static:[5,9],tc_statist:[5,9],tcp:[13,17],templat:0,than:[3,13,14,15,18],thei:[6,17],thi:[0,1,2,3,4,6,8,10,11,12,13,14,15,16,17,18],through:6,tidi:8,time:[3,6,14,15,18],time_last:[3,14,15,18],todai:6,top:[0,1,2,3,4,6,8,10,11,12,13,14,15,16,17,18],touch:6,traffic:[1,3,6,10,11,12,14,15,16,17,18],trafficclassificationpolici:[14,15,16,17,18],transform:4,translat:10,transmiss:16,treatment:12,troubleshoot:6,tupl:16,two:17,type:[6,8,13,17],udp:17,uncommon:[],undesir:[],unexpect:[12,16],unsign:10,updat:[3,14,16],update:3,update_flowmetadata:3,url_data_size_row:0,url_flowt:0,url_flowtable_aug:0,url_flowtable_by_ip:0,url_identity_ip:0,url_identity_mac:0,url_identity_nic_t:0,url_identity_servic:0,url_identity_system_t:0,url_measure_event_r:0,url_measure_pkt_tim:0,use:[6,13],valid:[13,14,16,17,18],valid_id_ip_servic:14,validate_polici:[12,16],valu:[1,13,14,15,17,18],value_to_check1:17,value_to_check2:17,value_to_check:17,variabl:14,variou:13,version:13,view:6,visibl:[],want:[6,13],warn:10,warrante:[6,10],welcom:6,what:[6,13],whatsoev:[6,10],when:[3,13,14,15,18],where:[10,13],whether:14,which:13,wishlist:[],without:13,won:[12,16],work:6,written:16,wsgi:[0,10],wsgiapplicat:10,yaml:[1,12,16],you:[6,10],your:6},titles:["api module","config module","dns_experimental module","flow module","forwarding module","nmeta","Introduction","lldp-fixed module","measure module","Code Documentation","nmeta module","nmisc module","qos module","switch_abstraction module","tc_identity module","tc_payload module","tc_policy module","tc_static module","tc_statistical module"],titleterms:{api:0,code:9,config:1,consider:6,contribut:6,design:6,disclaim:6,dns_experiment:2,document:9,enhancement:6,featur:6,fix:7,flow:3,forward:4,how:6,indice:5,introduct:6,lldp:7,measur:8,modul:[0,1,2,3,4,7,8,10,11,12,13,14,15,16,17,18],nmeta:[5,10],nmisc:11,philosophi:6,privaci:6,switch_abstract:13,tabl:5,tc_ident:14,tc_payload:15,tc_polici:16,tc_static:17,tc_statist:18,wishlist:6}})