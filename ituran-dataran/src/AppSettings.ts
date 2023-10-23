export default class AppSettings {
  static aadTenant: string = "exaud.com";
  static clientId: string = "41a63311-f722-4d77-bd1b-52e396d243b1";
  static appWorkspaceId: string = "15b80ff2-fce2-4516-89cc-c2d334bba9f7";
  static accessToken : string = "H4sIAAAAAAAEACXTta7EVgBF0X95rSOZKVIKwxjHzNOZr5lpovx7npL-VFtn_f1jp08_pcXPnz-iPb6mWelS7E5Tc88J1X4nF5-0ShhVabPlimJrlPyxjzVIcI2DWLY7r80wolcI-kzGkZcDJ1NTy2Sc8EpeCBYPMIAnK3Uca53ysRLeZhERuLZwwsi7zF0-ibBluck12ggVcJ8a-No_aHZk_iDthm4suLp7zOTxkuziONGRa0o0HSy31HNmpMEJ0oKgO4WCGB9o7n405tpYWASX0L4WWsF4NBl5CG_VPnVX6xIKAYk96xiamHaRspqVgJHWVcQI8cktcLv3CiGEaVeJJoXhXjHmO9Uj_jsMbrK3eEj0Q9bYceF87CzuTSEdRjSGjSqDzKCZvULYEzz4PEre7zZG6PbhBDtZRcT7ZFSB103REO61SW6iVSa9bZQnjJ07rI-KDLJ1nVgRRqHXY3WThkm6oHveKqKZ-mqaCjmS8VYWHF3GXm16FP6oTM5fkGamUDlIRXuNNn3uTtbg8mCfFUWh9iVjCI324LMvi5sWOPzZ5JoiqRXV-QONzFPCbARFpOkdckqOHo_AwXLFL9FG6zzFcI1XTudQKZhmI0Uc7WZnmpqdTcoj-PQEhM9hWC20aEFc9bLUGQXVg2hKPQmd59Xq9hYBUdrIOm-a-9G_1XLWRRh7T-3HXlFr9a-ZuUYleF-0u8D-Rnq2jMR8k0l8o7dLbwNCIdmX983LOleO-KuUbfTGtw1smEwOXTybRAEN8KzxsTcbmfn9kAW-Jc91KWiUtCq1hOVSldeFDZ5uBPE4AP7jzma71YylQMnuhmm3bEuhI_0kCEjiZ7YVsV-PQPay8g0Xg7sQTI5yJaPo4_Y5aqiwGKPFuB315r6XTZe8CU5x2TtikJQp9cvPCpk5fodEK3BI3qL-pdX2IB2Dn5k5M501E6zzLRYnArMDx8aIcD07HkozRLpe3fYMIj8uY2FJsRRI3-A58FzuLoadr-f8oJjE9IPs-uvnjx9hfeZ90svnl64AnWKpLWHPNPQnGJ0uu-oKvY1vf3MCJTVj8jlvukw16I5Dgz2LsGYUAFrYOOZWvBnn7NfT-W4z-aS19GFyr3mHfTPFYttFvcG_vyWrvJbyTuwDo-smMHSGP6KakjbtlYOdBaFD_17EKBnR6kZUnze2qdhYm4W2yY8X26MMbvzSsm5rPVJo0w6_rKtegS5IzIf9HHzEUKFvWiQvWBj8m8mofG9z-QT9N62kd-l0ABmRRBBvVfoW4lYbjeIG0rRSCY7i_AXewkk4wL0fQY2D-5xp7BNv8gCdSemukKPx1wCxqEuaifF6TY9hQ4RqJDSW6SDcO5FsQKYh9NQoZHvI4qbaFffXf5mfGZSrGv5Wlmh719oBxDoGfe-wNzRr1v5feU09pvuxlr8zeSnT-joR31zRAbynJ4W1xmUbmsLoK_OUAbx6TzUOash27cld5OzqLWvRl5ZV7KfrHA6K9l9bcv1yHmtFPH5u4cKW1c5YR21Qw4IodMArO2ykv7ZdtDbij3zZp6Cel50xgRTFjqKHxOqnzMrT_SXFMg9Jby7oAOYv745sRjiGlUfX8JQsvbjA9eOYGxo04pM-ArGXjrM-1DcoejsMq4i5-GdOB4JggPWu5iLdDMtOWRq__HjBQqPPfbHGVTE4bysGPa-rofvGyJcZAthrTq7g8ODSKvGQSf4MQnJno9eU6CbL2_AXG915_cb7vBJawgV9tE4JzK9XnwYasKaSUD8ajzu_mf_5FzbmLFeuBgAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTY5ODA2Mzc5NiwiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9"
  // this last only 1 hour 
}

/* HTTP request access token for Workspace/Group
https://learn.microsoft.com/en-us/rest/api/power-bi/embed-token/generate-token


POST https://api.powerbi.com/v1.0/myorg/GenerateToken
Content-type: application/json
Body: "{
 "datasets": [
   {
     "id": "bd591941-96a5-4d45-a38e-1975d9982dc6"
   },
   {
     "id": "32798719-1aff-4eb1-8d70-daf6e30cc27c"
   },
 ],
 "reports": [
   {
     "id": "fd698f7f-3094-46cd-87f0-e09eddc9b660" 
   },
   {
     "id": "6ed8dbb1-2b00-4e7b-bdd6-814cb3634e42" 
   },
 ],
}"

*/