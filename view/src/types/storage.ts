// Types
import { UserPublicData } from "@/types/user";
import { SettingsState } from "@/redux/slicers/initialState/settings";

export type StorageType = "local" | "session";

export interface StorageData {
  settings: SettingsState,
  user: UserPublicData
}
