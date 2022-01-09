export type SwitchValue = number[] | null;

export interface IHandler<T> {
  (updatedValue: T): void;
}

export interface INotifierHandler<T> {
  (sender: string, updatedValue: T): void;
}

export interface INotifier<T> {
  notify: INotifierHandler<T>;
}

export interface ISubscriber<T> {
  subscribe: (sender: string, handler: IHandler<T>) => number;
  unsubscribe: (sender: string, handlerId: number) => void;
}

interface ISubscriptionStore<T> {
  [handlerId: number]: IHandler<T>;
}

interface ISubscriptionContainer<T> {
  [sender: string]: ISubscriptionStore<T>;
}

export const notifier: INotifier<SwitchValue> & ISubscriber<SwitchValue> = (() => {
  let handlerId = 0;
  const subscriptions: ISubscriptionContainer<SwitchValue> = {};
  const subscribe = (sender: string, handler: IHandler<SwitchValue>) => {
    handlerId += 1;
    if (subscriptions[sender] === undefined) {
      subscriptions[sender] = {};
    }
    subscriptions[sender][handlerId] = handler;
    return handlerId;
  };
  const unsubscribe = (sender: string, handlerId: number) => {
    delete subscriptions[sender][handlerId];
  };

  const notify: INotifierHandler<SwitchValue> = (sender, updatedValue) => {
    if (subscriptions[sender] === undefined) return;
    for (var handlerId in subscriptions[sender]) {
      const handler = subscriptions[sender][handlerId];
      handler(updatedValue);
    }
  };
  return {
    subscribe,
    unsubscribe,
    notify,
  };
})();

export const disabledNotifier: INotifier<boolean> & ISubscriber<boolean> = (() => {
  let handlerId = 0;
  const subscriptions: ISubscriptionContainer<boolean> = {};
  const subscribe = (sender:string, handler: IHandler<boolean>) => {
    handlerId += 1;
    if (subscriptions[sender] === undefined) {
      subscriptions[sender] = {};
    }
    subscriptions[sender][handlerId] = handler;
    return handlerId;
  };
  const unsubscribe = (sender:string, handlerId: number) => {
    delete subscriptions[sender][handlerId];
  };

  const notify: INotifierHandler<boolean> = (sender, updatedValue) => {
    if (subscriptions[sender] === undefined) return;
    for (var handlerId in subscriptions[sender]) {
      const handler = subscriptions[sender][handlerId];
      handler(updatedValue);
    }
  };
  return {
    subscribe,
    unsubscribe,
    notify,
  };
})();
