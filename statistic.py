import json
from pprint import pprint
import datetime
import matplotlib.pyplot as plt

with open('data.json') as data_file:    
    data = json.load(data_file)

overall = {}

for key in data['users']:
    userData = data['users'][key]
    print(userData['acmpId'], userData['fullname'])

    statistics = []
    for backupKey in data['backups']:
        date = datetime.datetime.strptime(backupKey, "%d_%m_%Y")
        if key in data['backups'][backupKey]['users']:
            backupUserData = data['backups'][backupKey]['users'][key]
            statistics.append((date, backupUserData['contestRating']))

    y = []
    statistics.sort()
    for tup in statistics:
        a, b = tup
        y.append(b)
        old = 0
        if a in overall:
            old = overall[a]
        overall.update({a: old + b})

    plt.plot(y)
    plt.savefig('statistics/' + userData['fullname'] + '.png', transparent=True)
    plt.close()

y = []

for key in overall:
    if y:
        y.append(overall[key] - prev)
    else:
        y.append(overall[key])
    prev = overall[key]

plt.plot(y)
plt.savefig('statistics/overall.png', transparent=True)
plt.close()
