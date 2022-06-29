import { RemovalPolicy, Stack, StackProps, CfnOutput  } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  aws_s3,
} from 'aws-cdk-lib';
import {getConfig} from '../config';

export class PatikaProjectCDNBucket extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const config = getConfig(scope);

    const buck = new aws_s3.Bucket(this, 'PatikaProjectCDNBucket', {
      bucketName: `${config.account}-${config.region}-rabia-gul-assets-bucket`,/*to generate unique bucket name*/
      blockPublicAccess: {
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      }
    });


    /* to generate values that we can import into other stacks*/
    new CfnOutput(this, 'PatikaCDNBucketARN', {
        exportName: 'PatikaCDNBucketARN',
        value: buck.bucketArn
      });

      new CfnOutput(this, 'PatikaCDNBucketName', {
        exportName: 'PatikaCDNBucketName',
        value: buck.bucketName
      });

  
  }
}
