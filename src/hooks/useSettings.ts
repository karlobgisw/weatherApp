import {create} from 'zustand';

type SettingsTypes = {
    celsius: boolean,
    hectopascal: boolean,
    changeTemperature: ()=>void;
    changePressure: ()=>void;
}

// Define el store
const useSettings = create<SettingsTypes>((set) => ({
  celsius: true,
  hectopascal: true,
  changeTemperature: () => set((state) => ({ celsius: !state.celsius })),
  changePressure: () => set((state) => ({ hectopascal: !state.hectopascal })),
}));

export default useSettings;