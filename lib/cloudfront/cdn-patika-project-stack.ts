import { Stack, StackProps, CfnOutput, Fn, aws_cloudfront_origins } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  aws_cloudfront,
  aws_s3,
  aws_certificatemanager,
  aws_route53,
  aws_route53_targets,

} from 'aws-cdk-lib';
import { DomainName } from 'aws-cdk-lib/aws-apigateway';
import { ViewerCertificate } from 'aws-cdk-lib/aws-cloudfront';
import { Certificate } from 'crypto';
import { TargetTrackingScalingPolicy } from 'aws-cdk-lib/aws-applicationautoscaling';

export class PatikaProjectCDNCloudfront extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    /*A reference to a bucket outside this stack.*/
    const bucket = aws_s3.Bucket.fromBucketAttributes(this, 'PatikaProjectCDNBucket', {
      bucketArn: 'arn:aws:s3:::433316814029-eu-central-1-rabia-gul-assets-bucket',
      bucketName: '433316814029-eu-central-1-rabia-gul-assets-bucket',
      region: 'eu-central-1'
    });


    const distribution = new aws_cloudfront.CloudFrontWebDistribution(this, 'PatikaProjectCDN', {
      
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,    
            originAccessIdentity: new aws_cloudfront.OriginAccessIdentity(this, 'OriginAccessIdentity', {
              comment: 'cloudfront distribution access identity for this bucket'
            }) 
          },
          behaviors: [ { isDefaultBehavior:  true } ] /*config default olarak işletilsin*/
        },
        
      ],

      priceClass: aws_cloudfront.PriceClass.PRICE_CLASS_ALL,
      comment: 'CDN dist for my application',

      
      
    }); 

    
/*     const certificate = aws_certificatemanager.Certificate.fromCertificateArn(this, 'PatikaCDNCert', 
    'arn:aws:acm:us-east-1:433316814029:certificate/554f8103-8859-4f1d-ad03-83dded7fd606');


    const distribution = new aws_cloudfront.Distribution(this, 'PatikaProjectCDN', {
      
      defaultBehavior: {origin: new aws_cloudfront_origins.S3Origin(bucket)},
      domainNames: ["patika-cdn.kitten.com"],
      certificate,

      priceClass: aws_cloudfront.PriceClass.PRICE_CLASS_ALL,
      comment: 'CDN dist for my application',

    
    });  */



/*     const hostedZone = aws_route53.HostedZone.fromHostedZoneAttributes(this, 'PatikaCDNHostedZone', {
      hostedZoneId: 'Z0372393HNKL7WVE5KRU', //insert your hosted zone ID here.
      zoneName: 'patika-cdn.kitten.com'
    }); */

   

/*       new aws_route53.ARecord(this, 'ApiPatikaCDNARecord', {
        target: aws_route53.RecordTarget.fromAlias(new aws_route53_targets.CloudFrontTarget(distribution) ),
        zone: hostedZone,
        recordName: 'api-patika'
      }); */


  

  }
}