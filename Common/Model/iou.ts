export interface IOUContract {
    id: string;
    _id: string;  
    contract_name: string;
    xml_path: string;
    json_path: string;
    contract_addr: string;
    publisher: string;
    is_started: boolean;
    publish_status: string;
    date: number;//publish date
    slot_users: SlotUser[];
    schedulers: Scheduler[];
  }
export  interface IOUAlarm {
    type: string;
    contract_id: string;
    contract_name: string;
  } 
export interface SlotUser {
  _id: string;  

  slot_name: string;
  user: string;//Schema.Types.ObjectId,
  isNeededSign: boolean; 
  sentSignReq: string;//Schema.Types.ObjectId, 
  receivedSignReq: string;//Schema.Types.ObjectId, 
  signStatus: boolean;
  sentInviteReq: string;//Schema.Types.ObjectId, 
  receivedInviteReq: string;//Schema.Types.ObjectId, 
  inviteStatus: boolean;
}
export interface Scheduler {
  _id: string;  

  user: string;//Schema.Types.ObjectId,
  fn_name: string;
  payable: boolean;
  pay_slot_type: string;
  pay_value: number;
  written_time: Date;
  is_executed: boolean;
  exec_result: boolean;
  executed_time: Date;
}
export interface Template {
    _id: string;
    user: string;
    tplName: string;
    tplPath:string;
    date : string;
}