import { DynamicModule, Module } from '@nestjs/common'
import { dirname,join } from 'node:path'
import { fileURLToPath } from 'node:url';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config'
import { EnvConfigService } from './env-config.service.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

@Module({
  providers: [EnvConfigService]
})
export class EnvConfigModule{
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return {
      module: EnvConfigModule,
      imports: [
        ConfigModule.forRoot({
          ...options,
          isGlobal: true,
          envFilePath: [
            join(__dirname, `../../../../.env.${process.env.NODE_ENV}`),
          ],
        }),
      ],
    }
  }
}
