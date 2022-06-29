Common Stack<br />
● Create VPC with CIDR 10.0.0.0/16<br />
● Create VPC Public Subnets and Private Subnets with NAT Gateway<br />

AWS CDN Stack<br />
● Create S3 Bucket with name “your-name-assets-bucket” and block public access for<br />
whole bucket and it’s objets.<br />
● Create full CloudFront stack and use S3 bucket above as S3 Origin<br />
● (Optional) Create Public SSL using AWS Certificate Manager and provide Certificate<br />
Key&Values matching to your Route53 Hosted Zone to be have validated SSL<br />
certificate<br />
Your certificate should have both domain and alternate domain namings<br />
[“yourdomain.com”, “*.yourdomain.com”] to be able to use wildcarding for your SSL.<br />
● (Optional) Create alternate domain for your CloudFront domain and provide your SSL<br />
certificate to CloudFront stack<br />
● (Optional) Create “patika-cdn.yourdomain.com” Route inside your Hosted Zone as<br />
CloudFront Alias (A) record<br />
