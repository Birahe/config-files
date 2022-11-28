#!/bin/bash
BRIGHTNESS_VALUE=`brightnessctl | grep -o "(.*" | tr -d "()"`
BRIGHTNESS_NR=${BRIGHTNESS_VALUE//%}
#if [ $BRIGHTNESS_NR -eq 100 ]; then
#	BRIGHTNESS_ICON="☀️"
#elif [ $BRIGHTNESS_NR -gt 50 ]
#then
#	BRIGHTNESS_ICON="🔆"
#else 
#	BRIGHTNESS_ICON="🔅"
#fi
BRIGHTNESS_ICON=

echo "$BRIGHTNESS_ICON $BRIGHTNESS_VALUE"
