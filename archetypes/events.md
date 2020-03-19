---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
event_date: "{{ dateFormat "January 2, 2006" .Date }}"
link: ""
location: ""
---