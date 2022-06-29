import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  aws_ec2,
} from 'aws-cdk-lib';

export class PatikaProjectVpcStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new aws_ec2.Vpc(this, 'PatikaProjectVpc', {
        vpcName: 'patika-project-vpc',
        cidr: '10.0.0.0/16', /*String*/
        subnetConfiguration: [ {

            name: 'PublicSubnet',
            subnetType: aws_ec2.SubnetType.PUBLIC,
            
        }, 

        {
            name: 'PrivateSubnet',
            subnetType: aws_ec2.SubnetType.PRIVATE_ISOLATED
        }
        ]
    });
  }
}
