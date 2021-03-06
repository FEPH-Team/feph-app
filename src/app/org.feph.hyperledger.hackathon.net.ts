import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.feph.hyperledger.hackathon.net{
   export class User extends Participant {
      email: string;
   }
   export class SampleAsset extends Asset {
      assetId: string;
      value: string;
   }
   export class ChangeAssetValue extends Transaction {
      newValue: string;
      relatedAsset: Asset;
   }
// }
