# patika-project

Common Stack
● Create VPC with CIDR 10.0.0.0/16
● Create VPC Public Subnets and Private Subnets 


AWS CDN Stack
● Create S3 Bucket with name “your-name-assets-bucket” and block public access for
whole bucket and it’s objets.
● Create full CloudFront stack and use S3 bucket above as S3 Origin
● (Optional) Create Public SLL using AWS Certificate Manager and provide Certificate
Key&Values matching to your Route53 Hosted Zone to be have validated SSL
certificate
Your certificate should have both domain and alternate domain namings
[“yourdomain.com”, “*.yourdomain.com”] to be able to use wildcarding for your SSL.
● (Optional) Create alternate domain for your CloudFront domain and provide your SLL
certificate to CloudFront stack
● (Optional) Create “patika-cdn.yourdomain.com” Route inside your Hosted Zone as
CloudFront Alias (A) record.
