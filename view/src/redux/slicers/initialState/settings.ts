export type SettingsState = {
  direction: "rtl" | "ltr";
  language: string;
};

export const initialState: SettingsState = {
  direction: "ltr",
  language: "en"
}
