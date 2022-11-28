#!/usr/bin/env sh
killall -q polybar

polybar --reload mainbar-i3 -c ~/.config/polybar/config.ini
