export type SwitchValue = number[] | null;

export interface IHandler<T> {
  (updatedValue: T): void;
}

export interface INotifier<T> {
  notify: IHandler<T>;
}

export interface ISubscriber<T> {
  subscribe: (handler: IHandler<T>) => number;
  unsubscribe: (handlerId: number) => void;
}

interface ISubscriptionStore<T> {
  [handlerId: number]: IHandler<T>;
}

export class Notifier<T> implements INotifier<T>, ISubscriber<T> {
  private handlerId = 0;
  private subscriptions: ISubscriptionStore<T> = {};
  subscribe(handler: IHandler<T>) {
    this.handlerId = this.handlerId / Number.MAX_VALUE + 1;
    this.subscriptions[this.handlerId] = handler;
    return this.handlerId;
  }
  unsubscribe(handlerId: number) {
    delete this.subscriptions[handlerId];
  }
  notify(updatedValue: T) {
    for (var handlerId in this.subscriptions) {
      this.subscriptions[handlerId](updatedValue);
    }
  }
}
