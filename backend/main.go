package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type workout struct {
	ID   string    `json:"id"`
	Name string    `json:"name"`
	Date time.Time `json:"date"`
}

func main() {
	router := gin.Default()
	router.GET("/workouts", getWorkouts)
}

func getWorkouts(c gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
}
