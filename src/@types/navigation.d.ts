type RootParamList = {
  groups: undefined;
  new: undefined;
  players: {
    group: string;
  };
};

export type PageProps<T> = NativeStackNavigationProp<RootParamList, T>;

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined;
      players: {
        group: string;
      };
    }
  }
}
