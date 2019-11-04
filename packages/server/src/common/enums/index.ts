export enum Crud {
  delete = 'delete',
  get = 'get',
  patch = 'patch',
  post = 'post'
}

export enum EventStatus {
  ARCHIVED = 'archived',
  DELETED = 'deleted',
  CLOSED = 'closed',
  OPENED = 'opened',
  WAITING = 'waiting'
}

export enum EventVisibility {
  LIMITED = 'limited',
  PUBLIC = 'public'
}
