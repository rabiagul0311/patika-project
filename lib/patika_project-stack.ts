import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  aws_s3,
} from 'aws-cdk-lib';

export class PatikaProjectStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const buck = new aws_s3.Bucket(this, 'patikabucket', {
      bucketName: 'patika-project-bucket'
    })

  
  }
}
