# OpsBerry slash command template
* Here is a node endpoint with Dockerfile that you can host locally or in your own datacenter/cloudservice that enables you to trigger blueprints from Slack slash commands.

## Here is the URL on how to create slash commands:
https://api.slack.com/interactivity/slash-commands

Make sure to create a `.env` file:
WEBHOOK_URL=""
API_KEY=""

## Usage:
`/slash_command_you_created_in_Slack [QUERY]` 

If your Blueprint requires a payload, it must be in `JSON` format. 

Look at the example below:
```
{
  "severity": "critical",
  "hostname": "opsberry.test.com",
  "ip address": "172.132.11.79",
  "instanceId": "i-086a33210e5660c92",
  "description": "Kubernetes-prod pod is having issues. ",
  "Region": "us-west-2",
  "logGroup": "opsberry-log-tests",
  "Triggered": "triggered 1 times in past 24 hours"
}
```

Slack command example:
```
/opsberry-run-automation-1 {
  "severity": "critical",
  "hostname": "opsberry.test.com",
  "ip address": "172.132.11.79",
  "instanceId": "i-086a33210e5660c92",
  "description": "Kubernetes-prod pod . ",
  "Region": "us-west-2",
  "logGroup": "opsberry-log-tests",
  "Triggered": "triggered 1 times in past 24 hours"
}
```
