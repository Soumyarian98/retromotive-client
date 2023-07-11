/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_YWRhcHRpbmctaG91bmQtOTYuY2xlcmsuYWNjb3VudHMuZGV2JA",
    CLERK_SECRET_KEY: "sk_test_CbkVqKalne0j2pchdkQHPGtvhm4yvkVvFdtllrfnDw",
    HYGRAPH_CMS_QUERY_URL: "https://ap-southeast-2.cdn.hygraph.com/content/clji08bcd0w7f01umd1v2606g/master",
    HYGRAPH_CMS_MUTATION_URL: "https://api-ap-southeast-2.hygraph.com/v2/clji08bcd0w7f01umd1v2606g/master",
    HYGRAPH_AUTH_TOKEN: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODgwOTU2MzUsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbGppMDhiY2QwdzdmMDF1bWQxdjI2MDZnL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI4YWJjMzZkMC0xNTkyLTRhN2YtOTdmYi1kOThhZWUzOGM2NTgiLCJqdGkiOiJjbGppMGswYWgweGx2MDF0ZmV0bnVkOWNnIn0.PcJyn0PbAwv39MW3rc6DCNsBRRQPWpSTuJsVuTUb9iWPpgvnAst9uH8Rdni5w2oamhzqBd_Tcx1Ydzjw3onk8ZrT63qCoeeGHucY-iIjrUmQY-HaLSwE44vCOOHApxOlKZIy-uRFGiXHi_HBEBk4jxaY9Q3XG4726KCNWXKU29wADqsG82Z_vUojLCOtVPrdZ3QF--uql-mTAyJiUleWUqViHTyvBR0JxcRf78Jj3HZJlssZa002dLWd4ENG3ExbHalogEiKNf_xD72hyj5WYD2Lvmhb6ZLnVI2wjt33ZH4arTbFfDydS4iH8K91RpJgnwfk93TRhE3kTD8zGE6j3oR8pRgDABL3Nnq2Fs7siJSR9JwxypEtZGZAN1iCHTqnUjzZ2JKQSBw6S79n-GXzF8Ojrp7DE8sP7OadCJRpXJLIPElSg-6WymrKb02FE8_uFi-4sP-PWrKcwKmZqsL1LvWFB78rSg99lW91InH-fGSQfKtg_HIMPdsz1n-8cDSUrBj8_p2ZI21KTjOhcZz-08uTx7gH4nB7EDE6GMxeEr8trBJ2rzMCQnJnQDu7khLS6NclqNrMia08S27Tp30pAirUuum1yR4qcNyGeHXLN84XF2D-bf9eP-g5fnHSG6ySd8rSIlwsSSQZVdRebTWDLF65jX25zNIn_Mlh92BI9Q4`
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: "asset/source",
    })
    return config
  },
}

module.exports = nextConfig
