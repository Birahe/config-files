package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
)

type application struct {
	errorLog  *log.Logger
	infoLog   *log.Logger
	port      int
	staticDir string
}

func main() {
	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	app := &application{
		errorLog: errorLog,
		infoLog:  infoLog,
	}
	flag.IntVar(&app.port, "port", 4000, "HTTP network adress")
	flag.StringVar(&app.staticDir, "static-dir", "ui/static", "Path to static assets")
	flag.Parse()

	srv := &http.Server{
		Addr:     fmt.Sprintf(":%d", app.port),
		ErrorLog: errorLog,
		Handler:  app.routes(),
	}

	infoLog.Printf("Starting server on :%d", app.port)
	err := srv.ListenAndServe()

	errorLog.Fatal(err)
}
