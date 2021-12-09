import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvents";
import { IUSer } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestAction } from "./types";

export const EventActionCreators = {
  setGuests: (payload: IUSer[]): SetGuestAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (disptach: AppDispatch) => {
    try {
      const guests = await UserService.getUsers();
      disptach(EventActionCreators.setGuests(guests.data));
    } catch (error) {
      console.log(error);
    }
  },
  createEvent: (event: IEvent) => async (disptach: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      disptach(EventActionCreators.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (error) {
      console.log(error);
    }
  },
  fetchEvents: (username: string) => async (disptach: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      const currentUSerEvents = json.filter(
        (ev) => ev.author === username || ev.guest === username
      );
      disptach(EventActionCreators.setEvents(currentUSerEvents));
    } catch (error) {
      console.log(error);
    }
  },
};
