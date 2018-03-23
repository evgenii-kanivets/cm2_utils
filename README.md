# Code Marathon 2.0 Utils
Utility scripts and functions to handle CodeMarathon 2.0.

## Firebase Could Functions
Actually there is only one function that is being called by Zapier integration, when new user is registered. Located under `code_marathon_2.0` folder.

## Background connectivity checking
[Code Marathon server application](https://github.com/evgenii-kanivets/cm2) was run on Raspberry PI connected to the Internet
the home Wi-Fi router. It was continiosly being disconnecting and not reconnecting for some reason. So I wrote the script to
reconfigure Raspberry's Wi-Fi adapter automatically is it's broken.

```{bash}
while true:
    response = os.system("ping -c 1 https://google.com")
    if response == 0:
        print("Connected to Internet")
    else:
        wpa_cli -i wlan0 reconfigure
```

## Plotting statistic
`statistic.py` gets data from Firebase DB snapshot file and creates plots for each participant with dynamic of rating change.
