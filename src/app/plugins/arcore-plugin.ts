import { registerPlugin } from '@capacitor/core';

export interface ARCorePlugin {
    echo(options: { value: string }): Promise<{ value: string }>;
    launchARActivity(): void;
}

const Echo = registerPlugin<ARCorePlugin>('ARCore');

 export default Echo;