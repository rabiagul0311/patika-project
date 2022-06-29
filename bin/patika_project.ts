#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PatikaProjectStack } from '../lib/patika_project-stack';
import {PatikaProjectVpcStack} from '../lib/vpc';
import { getConfig } from '../lib/config';
import { PatikaProjectCDNBucket } from '../lib/s3';
import { PatikaProjectCDNCloudfront } from '../lib/cloudfront';

const app = new cdk.App();
const conf = getConfig(app);
const env = {

  account: conf.account,
  region: conf.region,

};
new PatikaProjectStack(app, 'PatikaProjectStack', {env});

new PatikaProjectVpcStack(app, 'PatikaProjectVpcStack', {env} );

new PatikaProjectCDNBucket(app, 'PatikaProjectCDNBucket', { env });

new PatikaProjectCDNCloudfront(app, 'PatikaProjectCDNCloudfront', { env: { account: env.account, region: 'us-east-1' } });