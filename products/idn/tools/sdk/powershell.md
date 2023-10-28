---
id: powershell-sdk
title: PowerShell SDK
pagination_label: PowerShell SDK
sidebar_label: PowerShell
sidebar_position: 3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'sdk']
description: Learn how to use the PowerShell SDK in this guide.
slug: /tools/sdk/powershell
tags: ['SDK']
---

Read this guide to learn how to use the PowerShell SDK. The PowerShell SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow.

You can find the SDK and its examples in its GitHub repo [here](https://github.com/sailpoint-oss/powershell-sdk).

The PowerShell SDK includes the following functionality:

- [APIs](#run-an-api-request):

  - All [V3](/idn/api/v3) and [Beta](/idn/api/beta) APIs are available.
  - The following V2 APIs are available:

    | Collection | Endpoint |
    | --- | --- |
    | Workgroups | GET Workgroup, PATCH Workgroup, DELETE Workgroup, GET Workgroups, POST Workgroups, GET Workgroup Members, POST Workgroup Members, GET Workgroup Connections, POST Bulk Delete Workgroups |
    | Organizations | GET Organization, PATCH Organization |

  - The following CC APIs are available:

    | Collection | Endpoint |
    | --- | --- |
    | Accounts | GET Accounts, POST Remove Account |
    | Applications | GET Applications, GET Application, POST Application, POST Update Application, POST Delete Application, GET Application Access Profiles |
    | Connectors | GET Connectors, POST Connector, POST Delete Connector, GET Export Connector, POST Import Connector |
    | User | POST Update User Permissions |
    | Sources | POST Account Aggregation, GET Export Account Feed |
    | System | POST Refresh Identities |

- [Search](#search): You can use IdentityNow's search. To learn more about IdentityNow's search, refer to [Search](https://documentation.sailpoint.com/saas/help/search/index.html).
- [Transforms](#transform): You can use transforms, configurable JSON objects that define easy ways to manipulate attribute data without your needing to write any code. To learn more about IDN's transforms, refer to [Transforms](/idn/docs/transforms).
- [Pagination](#paginate-results): You can use the SDK's pre-built pagination functionality to paginate the responses to your SDK requests. To learn more about pagination, refer to [Paginating Results](/idn/api/standard-collection-parameters#paginating-results).

## Requirements

You need the following to use the PowerShell SDK:

- Your tenant name in IdentityNow. To learn how to find it, refer to [Getting Started](/idn/api/getting-started#find-your-tenant-name). The SDK will use this tenant name to connect to your IdentityNow instance.

- A PAT with a client secret and ID. To learn how to create one in IdentityNow, refer to [Personal Access Tokens](/idn/api/authentication#personal-access-tokens). The SDK will use this PAT to authenticate with the SailPoint APIs.

## Setup

To set up your PowerShell SDK, follow these steps:

1. [Install the SDK](#install-the-sdk)
2. [Configure the SDK](#configure-the-sdk)

### Install the SDK

Install the SDK with this command:

```PowerShell
Install-Module -Name PSSailpoint
```

This command installs the SailPoint PowerShell SDK modules. You will be prompted to confirm that you are sure you want to install the modules from 'PSGallery'. Enter "A" to say "Yes to All".

If you already have a version of the PowerShell SDK installed, you can install a new version side-by-side with it by adding the `-Force` parameter to the end of your `Install-Module` commmand:

```PowerShell
Install-Module -Name PSSailpoint -Force
```

<details>
    <summary>Manual Installation</summary>

### Manually Install the SDK

If access to the PowerShell Gallery isn't available, you can also install the PowerShell SDK manually. Follow these steps to do so:

:::caution

If you manually install the module on a machine without access to the PowerShell Gallery, you will also need to manually install updates to the SDK.

:::

To manually install the PowerShell module:

1. Download the source code zip from the most recent release on [GitHub](https://github.com/sailpoint-oss/powershell-sdk/releases)
2. Open the ZIP file, then open then folder labeled `powershell-sdk-x.x.x` with the `x.x.x` representing the version you downloaded
3. Extract the `PSSailpoint` module folder inside to one of the following locations:
   - To install for the Current user: `C:\Users\<username>\Documents\WindowsPowerShell\Modules\PSSailpoint`
   - To install for All users (requires Administrator privileges): `C:\Program Files\WindowsPowerShell\Modules\PSSailpoint`
4. Run `Import-Module PSSailpoint` to import the module into the current session.
5. To validate the module is installed, run `Get-Module -ListAvailable PSSailpoint` and verify that the module is listed. Additionally, you can run `Get-Command -Module PSSailpoint` to see the available commands included in the module.

</details>

### Configure the SDK

To configure the SDK and successfully interact with your IdentityNow tenant, you must provide your authentication details and environment (your IdentityNow tenant) variables. Once you have configured these details, the SDK can authenticate your identity and grant you all your authorized access.

The best way to configure the SDK is to use the [SailPoint CLI](https://github.com/sailpoint-oss/sailpoint-cli). The PowerShell SDK module itself leverages the CLI (command line interface) to perform automations, and you can use the CLI to quickly configure your authentication details and environment variables.

You can get the latest SailPoint CLI release here: https://github.com/sailpoint-oss/sailpoint-cli/releases

Read [CLI Configuration](https://developer.sailpoint.com/idn/tools/cli/#configuration) to learn how to quickly configure the CLI.

The CLI stores your configuration details in your home directory, so your credentials will persist across sessions. The PowerShell SDK gets your configuration details from your home directory as well, so once you have configured the CLI, you have also configured the PowerShell SDK!

You can use this command to view your configuration details:

```PowerShell
Get-DefaultConfiguration
```

You can now start using the PowerShell SDK.

<details>
    <summary>Manual Configuration</summary>

#### Manual Configuration

You can also manually configure the PowerShell SDK. However, this configuration method will be deprecated in the future, so it is recommended that you use the SailPoint CLI instead. To manually configure the PowerShell SDK, create a configuration file, "config.yaml" file in your project and specify this information in the file:

```yaml
activeenvironment: example # the key that identifies the currently active environment
authtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value
customexporttemplatespath: '' # the path to the users custom export templates file if one is provided
customsearchtemplatespath: '' # the path to the users custom search templates file if one is provided
debug: false # the debug setting
environments: # the configured environments
example:
  baseurl: https://example.api.identitynow.com
  pat:
  accesstoken: example-access-token
  clientid: example-client-id
  clientsecret: example-client-secret
  expiry: example-access-token-expiry
  tenanturl: https://example.identitynow.com
```

You must specify the following information:

- `activeenvironment`: This key identifies the current active environment the SDK is connecting to. This environment name refers to your IdentityNow tenant name. In the example, the key is "example". You must also make sure the environment name listed under `environments` matches the `activeenvironment`.
- `authtype`: The authentication type. Currently only "pat" and "pipeline" are supported. Configuring ENV VAR SAIL_AUTH_TYPE to "pipeline" overrides this value. In the example, the authentication type is "pat". You must also make sure the authentication type listed under the environment name "example" matches the `authtype`.
- `baseurl`: This refers to the URL used to access the API of your IdentityNow tenant.
- `tenanturl`: This refers to the URL used to access your IdentityNow tenant.
- `clientsecret`: The PAT's client secret.
- `clientid`: The PAT's client ID.

Here's an example:

```yaml
activeenvironment: devrel # the key that identifies the currently active environment
authtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value
customexporttemplatespath: '' # the path to the users custom export templates file if one is provided
customsearchtemplatespath: '' # the path to the users custom search templates file if one is provided
debug: false # the debug setting
environments: # the configured environments
devrel:
  baseurl: https://devrel.api.identitynow.com
  pat:
  accesstoken: example-access-token
  clientid: g0567b766b413b22c05c66e75d532f1b
  clientsecret: cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7
  expiry: example-access-token-expiry
  tenanturl: https://devrel.identitynow.com
```

You can also specify this optional information:

- `customexporttemplatespath`: Specifies the folder path to save your custom export templates file in.
- `customsearchtemplatespath`: Specifies the folder path to save your custom search templates file in.
- `debug`: The debug setting. By default, it's set to "false".
- `accesstoken`: The PAT's name.
- `expiry`: The PAT's expiry date.

Save your "config.yaml" file in a folder called ".sailpoint" in your home directory. The SDK will look for this file here when you use the PowerShell `Get-DefaultConfiguration` command to get the default configuration.

#### Environment variable configuration

You can also store your configuration in environment variables.

On **Linux/Mac**, export the following environment variables:

```shell
export SAIL_BASE_URL=https://{tenant}.api.identitynow.com
export SAIL_CLIENT_ID={clientID}
export SAIL_CLIENT_SECRET={clientSecret}
```

To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like `~/.bash_profile`. On **Windows PowerShell**, run the following commands:

```PowerShell
$env:SAIL_BASE_URL=https://{tenant}.api.identitynow.com
$env:SAIL_CLIENT_ID={clientID}
$env:SAIL_CLIENT_SECRET={clientSecret}
```

To get your environment variables to persist across PowerShell sessions, use these commands instead:

```PowerShell
[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://{tenant}.api.identitynow.com')
[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','{clientID}')
[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','clientSecret}')
```

### Get the default configuration

To view your configuration details, run this command:

```PowerShell
Get-DefaultConfiguration
```

This command will look for your "config.yaml" file to get your authentication information. Your "config.yaml" file should be located in a folder called ".sailpoint" in your home directory, like in folder path example: "c:\users\adam.archer\.sailpoint\config.yaml"

When this command is successful, the SDK displays your configuration information.

If the command is unsuccessful, the SDK outputs this message: "Configuration file not found at {folder path}. Please provide a configuration file or configure using PowerShell environment variables."

To resolve this error, find the configuration file and copy it into the correct the specified folder path and run `Get-DefaultConfiguration` again.

</details>

## How to use the SDK

Once your PowerShell SDK is installed and configured, you can start accessing the SDK's different functionalities. You can immediately use the SDK to send API requests, search your tenant, and alter data with existing transforms, and you can use them to start building and customizing your own solutions.

This section provides an overview of the different functionalities you can use the PowerShell SDK to leverage, and it includes some prebuilt examples you can use for guidance.

Read further to learn how to do the following with the PowerShell SDK:

- [List the Cmdlets](#list-the-cmdlets)
- [Send an API request](#send-an-api-request)
  - [Paginate results](#paginate-results)
- [Search](#search)
  - [Paginate search results](#paginate-search-results)
- [Transform](#transforms)

### List the Cmdlets

With the PowerShell SDK, you can run cmdlets (native PowerShell commands) to access the SDK's various functionalities.

Each API endpoint, for example, has a PowerShell cmdlet equivalent that you can use in the SDK to leverage that endpoint. To use the [List Sources endpoint](https://developer.sailpoint.com/idn/api/v3/list-sources) endpoint, you would use this cmdlet: `Get-Sources`

To see the SDK's available cmdlets, use this cmdlet:

```PowerShell
Get-Command -Module PSSailpoint
```

The `Get-Command` cmdlet lists all the SDK's available cmdlets (all the cmdlets for the "PSSailpoint" module).

If you want to filter this list of cmdlets, you can use this example as a demonstration of how to do so:

```PowerShell
Get-Command -Module PSSailpoint | where-object {$_.name -like "Get-*Source*"} | Sort-Object Name | Get-Help | Format-Table Name, Synopsis -Autosize
```

This cmdlet lists only the cmdlets that involve "Get" functionality for sources, and it formats the table to sort by name and include a synopsis or description of the cmdlet's functionality.

### Send an API request

One of the main functionalities you can leverage with the PowerShell SDK is the built-in access to the APIs. SailPoint's APIs (application programming interfaces) are sets of definitions and protocols that enable external applications to interact with the SailPoint platform. You can use the SailPoint APIs to build extensions and integration that take advantage of SailPoint's platform's functionality.

You can use the PowerShell cmdlets to call the SailPoint APIs. For example, you can use the `Get-Sources` cmdlet to use the [List Sources endpoint](https://developer.sailpoint.com/idn/api/v3/list-sources).

Here is an example request you can copy into your PowerShell instance to try it out:

```PowerShell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored. Because requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'sourceId eq "f4e73766efdf4dc6acdeed179606d694"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **identityId**: *eq*  **name**: *eq, in*  **nativeIdentity**: *eq, in*  **sourceId**: *eq, in*  **uncorrelated**: *eq* (optional)

# Accounts List
try {

    Get-Accounts -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters

} catch {
    Write-Host $_
    Write-Host ("Exception occurred when calling Invoke-ListAccounts: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example calls the [List Accounts endpoint](https://developer.sailpoint.com/idn/api/v3/list-accounts) to list the accounts in your tenant that have the `sourceId` of "f4e73766efdf4dc6acdeed179606d694".

To narrow the results you return and define how many you can return, you can specify these parameters:

- `$Limit`: The maximum number of records to return per request. The default is 250.
- `$Offset`: The number of the first record to return with the request. The default is 0.
- `$Count`: This boolean, if enabled, populates the _X-Total-Count_ response header with the number of results that would be returned if `limit` and `offset` were ignored. Because requesting a total count can have a performance impact, it's not recommended to enable `$count` if you aren't using it.
- `$Filters`: You can filter results using the standard syntax described in [Filtering Results](/idn/api/standard-collection-parameters#filtering-results). Filtering is supported for the following fields and operators: `id`: `eq, in` `identityId`: `eq` `name`: `eq, in` `nativeIdentity`: `eq, in` `sourceId`: `eq, in` `uncorrelated`: `eq`

In this API request example, the limit is set to 250, the count is set to true, and the filters are set to filter for only accounts associated with the source with the ID "f4e73766efdf4dc6acdeed179606d694".

#### Paginate results

The PowerShell SDK has built-in pagination functionality that you can incorporate into your API requests. The SailPoint APIs return a default limit of 250 records per request. To get records past the first 250, you must implement pagination, which will allow you to get all the records you want.

Use the syntax shown in this example to paginate your requests:

```PowerShell
$Parameters = @{
    "Filters" = 'name co "Andrew"'
}

# Accounts List
try {

    Invoke-Paginate -Function "Get-Accounts" -Increment 250 -Limit 1000 -InitialOffset 0 -Parameters $Parameters

} catch {
    Write-Host $_
    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Get-Accounts")
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example gets accounts named "Andrew" from your tenant. It can get a maximum of 1000 accounts, the `Limit`, 250 accounts per page, the `Increment`, and starts with the first record, the `initialOffset` of 0.

To paginate the results, you can specify these parameters: -`Increment`: The number of records to return per page. -`Limit`: The maximum number of records to return per request. The default is 250. -`Offset`: The number of the first record to return with the request. The default is 0.

To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in [Paginating Results](/idn/api/standard-collection-parameters/#paginating-results).

### Search IdentityNow

The PowerShell SDK provides you access to IdentityNow's [Search](https://documentation.sailpoint.com/saas/help/search/index.html) functionality.

Here is an example search you can copy into your PowerShell instance to try it out:

```PowerShell
$Json = @"
{
	"indices": [
		"identities"
	],
	"query": {
		"query": "\"john.doe\"",
		"fields": [
		"name"
		]
	}
	}
"@

$Search = ConvertFrom-JsonToSearch -Json $Json

try {
    Search-Post -Search $Search
} catch {
    Write-Host ("Exception occurred when calling Search-Post: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example request uses the [Perform Search endpoint](/idn/api/v3/search-post) to search your tenant for identities with the name "john.doe".

#### Paginate search results

You can paginate your search results to get records past the default limit of 250. With pagination, you can get as many records as you want.

Use the syntax shown in this example to paginate your search results:

```PowerShell
$JSON = @"
{
	"indices": [
		"identities"
	],
	"query": {
		"query": "*",
		"fields": [
		"name"
		]
	},
	"sort": [
		"-displayName"
	]
	}
"@

$Search = ConvertFrom-JsonToSearch -Json $JSON

try {

    Invoke-PaginateSearch -Increment 50 -Limit 10000 -Search $Search

} catch {
    Write-Host $_
    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Paginate-Search")
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example searches your IdentityNow tenant for all identities and sorts them by their `displayName` in descending order. The search returns a maximum of 10,000 records, the `Limit`, and 50 records per page, the `Increment`.

To paginate the search results, you can specify these parameters: -`Increment`: The number of records to return per page. -`Limit`: The maximum number of records to return per request. The default is 250. -`Offset`: The number of the first record to return with the request. The default is 0.

### Transform

SailPoint's [Transforms](https://developer.sailpoint.com/idn/docs/transforms) are configurable objects that define easy ways to manipulate attribute data without requiring users to write code. The transforms take input data from one system and transform the data into output data that another system can use.

The PowerShell SDK includes all the transforms SailPoint has created, and provides you with the functionality you need to update them, manage them, and create your own.

Copy this transform example into your PowerShell instance to try it out:

```PowerShell
# Create transform
$JSON = @"
{
    "name": "New Transform",
    "type": "lookup",
    "attributes" : {
        "table" : {
            "USA": "Americas",
            "FRA": "EMEA",
            "AUS": "APAC",
            "default": "Unknown Region"
        }
    }
}
"@

$Transform = ConvertFrom-JsonToTransform -Json $JSON

 try {
    New-Transform -Transform $Transform
} catch {
    Write-Host ("Exception occurred when calling New-Transform: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

This example creates a new [Lookup](/idn/docs/transforms/operations/lookup) transform named "New Transform" in your IdentityNow tenant. The transform takes input 3-letter country codes and transforms them into their regions.

## Get started

You can use the PowerShell SDK to build new tools and integrations that extend your SailPoint platforms and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss!
