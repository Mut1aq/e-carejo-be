import { Prop } from '@nestjs/mongoose';
import { localeStringOptions } from './date.util';

export abstract class Basic {
  //   @Prop({
  //     default: new Date(Date.now()).toLocaleString(
  //       undefined,
  //       localeStringOptions,
  //     ),
  //   })
  //   updateDate: String;

  @Prop({
    default: new Date(Date.now()).toLocaleString(
      undefined,
      localeStringOptions,
    ),
  })
  createDate: String;
}
