import { IAPIErrorResponse } from '../../models/API/error.model';
import { IEvent } from '../../models/API/event.model';

export const eventFeatureName = 'event';

export interface IEventState {
  isCreatingEvent: boolean;
  isLoadingEventList: boolean;
  eventList: IEvent[];
  eventListError: IAPIErrorResponse;
  createEventError: IAPIErrorResponse;
}
