import { IEvent } from "../../../models/IEvents";
import { IUSer } from "../../../models/IUser";

export interface EventState {
  guests: IUSer[];
  events: IEvent[];
}

export enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface SetGuestAction {
  type: EventActionEnum.SET_GUESTS;
  payload: IUSer[];
}

export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS;
  payload: IEvent[];
}

export type EventAction = SetGuestAction | SetEventsAction;
