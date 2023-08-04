package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type workout struct {
	ID        string     `json:"id"`
	Name      string     `json:"name"`
	Date      time.Time  `json:"date"`
	Exercises []exercise `json:"exercises"`
}

type exercise struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	Sets []set  `json:"sets"`
}

type set struct {
	ID     string `json:"id"`
	Reps   int    `json:"reps"`
	Weight int    `json:"weight"`
}

type newWorkout struct {
	Name string `json:"name"`
}

func main() {
	router := gin.Default()
	router.GET("/workouts", getWorkouts)
	router.GET("/workouts/:id", getWorkout)
	router.POST("/workouts", addWorkout)

	router.Run("localhost:8080")
}

func getWorkouts(c *gin.Context) {
	c.JSON(http.StatusOK, workouts)
}

func getWorkout(c *gin.Context) {
	id := c.Param("id")

	for _, workout := range workouts {
		if workout.ID == id {
			c.JSON(http.StatusOK, workout)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"message": "workout not found"})
}

func addWorkout(c *gin.Context) {
	var body newWorkout
	err := c.BindJSON(&body)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "invalid body"})
		return
	}

	fmt.Println(len(workouts))

	workouts = append(workouts, workout{
		ID:        uuid.New().String(),
		Name:      body.Name,
		Date:      time.Now(),
		Exercises: []exercise{},
	})

	fmt.Println(len(workouts))

	c.JSON(http.StatusCreated, gin.H{"message": "workout added"})

}

var workouts = []workout{
	{
		ID:   "15cb2e9e-eb2a-47bf-95b3-e694b3c19d77",
		Name: "Chest Day",
		Date: time.Date(2023, 2, 11, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{
			{
				ID:   "fce8a95d-5cf2-4eac-853e-015fe6efb9f8",
				Name: "Bench Press",
				Sets: []set{
					{
						ID:     "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
						Reps:   5,
						Weight: 135,
					},
					{
						ID:     "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5e",
						Reps:   5,
						Weight: 185,
					},
					{
						ID:     "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5f",
						Reps:   5,
						Weight: 205,
					},
				},
			},
		},
	},
	{
		ID:   "38a53a58-b7c7-4235-9e09-0d6617dbb2af",
		Name: "Arm Day",
		Date: time.Date(2023, 3, 17, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{
			{
				ID:   "63c0ac4a-120a-4eb3-a126-50f2383eb9b0",
				Name: "Bicep Curls",
				Sets: []set{
					{
						ID:     "d42a925e-6c5e-404c-92b3-4a1f154b5a24",
						Reps:   10,
						Weight: 30,
					},
					{
						ID:     "317946d6-df6f-47f7-b4c2-1ea7a7b26ee3",
						Reps:   10,
						Weight: 35,
					},
					{
						ID:     "f19e8dc1-62b5-43fc-bb0d-e46c6a0f7e86",
						Reps:   10,
						Weight: 40,
					},
				},
			},
			{
				ID:   "af6e4b68-0c25-451e-821c-e5d3b916ac3d",
				Name: "Tricep Dips",
				Sets: []set{
					{
						ID:     "ec33ce3f-5d6a-4b69-9035-8d1b6970c37d",
						Reps:   12,
						Weight: 0,
					},
					{
						ID:     "b7c171e3-e135-4a07-9a50-8d1c5f48ed7c",
						Reps:   12,
						Weight: 0,
					},
					{
						ID:     "4385b102-697d-4a47-bdda-149e87d0d882",
						Reps:   12,
						Weight: 0,
					},
				},
			},
		},
	},
	{
		ID:   "ad2a5d25-961a-4f11-b3af-8a18e9ca50b7",
		Name: "Cardio Day",
		Date: time.Date(2023, 5, 22, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{
			{
				ID:   "70ac7d9d-15e8-47a6-936e-940dd9db8577",
				Name: "Running",
				Sets: []set{
					{
						ID:     "63f1b03c-2346-4af7-9532-c1599f4cf832",
						Reps:   1,
						Weight: 0,
					},
					{
						ID:     "01f1a3b0-e2d2-45c6-bb3c-38be4b8c5fc3",
						Reps:   1,
						Weight: 0,
					},
					{
						ID:     "8644ed01-07ed-47e6-80b2-ae09b3c24a44",
						Reps:   1,
						Weight: 0,
					},
				},
			},
			{
				ID:   "8ebcdd43-c0e0-4eeb-89fc-220aa8d7cb09",
				Name: "Cycling",
				Sets: []set{
					{
						ID:     "34de3d90-3f25-4bb0-83d7-d30cf22cebb6",
						Reps:   1,
						Weight: 0,
					},
					{
						ID:     "94f87a61-4c67-4e15-9f07-515e9df825e9",
						Reps:   1,
						Weight: 0,
					},
					{
						ID:     "1d34641e-2062-4e57-836e-42ab8113b738",
						Reps:   1,
						Weight: 0,
					},
				},
			},
		},
	},
	{
		ID:   "eaaf938c-c7a6-4c7d-b0c3-3b40419e85ef",
		Name: "Core Day",
		Date: time.Date(2023, 6, 14, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{
			{
				ID:   "978f96f2-2d4a-46f2-8309-e5c3ac0f8960",
				Name: "Planks",
				Sets: []set{
					{
						ID:     "2b64684a-0499-43a5-8744-2d6da0e25944",
						Reps:   3,
						Weight: 0,
					},
					{
						ID:     "b822f636-ba1b-40ef-9cd8-86bbf58ed146",
						Reps:   3,
						Weight: 0,
					},
					{
						ID:     "9aa96269-d128-45cc-80d1-153bc7a63c31",
						Reps:   3,
						Weight: 0,
					},
				},
			},
			{
				ID:   "17d579aa-34ca-42da-b30b-df9d57d9a41a",
				Name: "Leg Raises",
				Sets: []set{
					{
						ID:     "17d9fdd7-1014-4bc2-b9c9-2bc96ebcb6cc",
						Reps:   3,
						Weight: 0,
					},
					{
						ID:     "0c8b360c-35b1-4cf4-87f2-91da3d3e2c40",
						Reps:   3,
						Weight: 0,
					},
					{
						ID:     "23b66cbe-1e1e-4ff3-8d39-af423b56ea39",
						Reps:   3,
						Weight: 0,
					},
				},
			},
		},
	},
	{
		ID:   "06e3a9e6-26a9-4ad1-8e46-673b76a1003f",
		Name: "Yoga Day",
		Date: time.Date(2023, 7, 19, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{
			{
				ID:   "6b71bba7-332e-4b09-a7ad-6e8715d012d6",
				Name: "Downward Dog",
				Sets: []set{
					{
						ID:     "82af87fc-5bf5-4441-88fb-9269863c860e",
						Reps:   3,
						Weight: 0,
					},
					{
						ID:     "54e8e97b-9530-41c0-8600-0909d2e2c171",
						Reps:   3,
						Weight: 0,
					},
					{
						ID:     "b9c366a5-1615-4e3a-8351-6602b8c06585",
						Reps:   3,
						Weight: 0,
					},
				},
			},
			{
				ID:   "328271a7-d642-4e35-88ab-47e65ea0b4d6",
				Name: "Warrior Pose",
				Sets: []set{
					{
						ID:     "dedd58e9-c0c6-4381-8c79-726e30c37c31",
						Reps:   5,
						Weight: 0,
					},
					{
						ID:     "bdfb25e8-9a0c-4f68-a0b8-7b2c9cfe2c3b",
						Reps:   5,
						Weight: 0,
					},
					{
						ID:     "dcce2f39-77b6-4a8a-8a68-4da42e7c8d0f",
						Reps:   5,
						Weight: 0,
					},
				},
			},
		},
	},
	{
		ID:        "a8ac9b02-ff9c-4181-926c-e7b63066a4d3",
		Name:      "Rest Day",
		Date:      time.Date(2023, 8, 9, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{},
	},
	{
		ID:   "45a542af-cc17-4f65-920d-dfcf6d1c93b7",
		Name: "Full-Body Day",
		Date: time.Date(2023, 9, 27, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{
			{
				ID:   "dc702b86-4b62-4413-99c6-015e185f3cd6",
				Name: "Push-ups",
				Sets: []set{
					{
						ID:     "c3f76778-40c0-4a67-84e1-0c8c80bce9ef",
						Reps:   12,
						Weight: 0,
					},
					{
						ID:     "3dbbdd54-5646-4dd0-9c67-8da1d8f65e14",
						Reps:   12,
						Weight: 0,
					},
					{
						ID:     "a60e74d2-3c0f-42cd-8835-49172ac1cd4b",
						Reps:   12,
						Weight: 0,
					},
				},
			},
			{
				ID:   "b931af78-6f7d-45e0-9243-85366ebd446d",
				Name: "Pull-ups",
				Sets: []set{
					{
						ID:     "2c77c232-1d10-4a59-ba13-59e48a54eaa3",
						Reps:   8,
						Weight: 0,
					},
					{
						ID:     "3d78fcbe-9c54-454e-b811-133b553a5ce6",
						Reps:   8,
						Weight: 0,
					},
					{
						ID:     "89c3001b-4ec0-47a0-b5f3-6420e0e24c1a",
						Reps:   8,
						Weight: 0,
					},
				},
			},
			{
				ID:   "8f4aee3c-07f6-4bb7-889e-2de8350838ab",
				Name: "Squats",
				Sets: []set{
					{
						ID:     "bcb44e61-20ed-447d-8c5e-e6b9b27fdd16",
						Reps:   10,
						Weight: 0,
					},
					{
						ID:     "8589f9a1-5c48-411a-9d58-d36021d2344a",
						Reps:   10,
						Weight: 0,
					},
					{
						ID:     "c55abf33-7d9d-49a6-b497-812429df68c3",
						Reps:   10,
						Weight: 0,
					},
				},
			},
		},
	},
	{
		ID:   "cd33c0ad-eab6-4162-a081-c2de48de8c7f",
		Name: "Flexibility Day",
		Date: time.Date(2023, 11, 8, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{
			{
				ID:   "6a8f4685-1e20-481d-bd4f-1d3da6054c07",
				Name: "Forward Bend",
				Sets: []set{
					{
						ID:     "5f14b4e9-1af2-4fa9-90db-7cde39ec5a85",
						Reps:   5,
						Weight: 0,
					},
					{
						ID:     "3f68918a-ba94-40eb-bb6c-2ed0b6c4c8d9",
						Reps:   5,
						Weight: 0,
					},
					{
						ID:     "d69b1bff-99d1-42ad-9ae9-ccfbcb318671",
						Reps:   5,
						Weight: 0,
					},
				},
			},
			{
				ID:   "d99e6b0e-7632-44c5-af4e-6a0817e89dc2",
				Name: "Quad Stretch",
				Sets: []set{
					{
						ID:     "05ddc536-e956-46e7-86f7-ec92a3ef464d",
						Reps:   5,
						Weight: 0,
					},
					{
						ID:     "e2d8fc8b-96c4-4419-8f4f-af9afbd68c86",
						Reps:   5,
						Weight: 0,
					},
					{
						ID:     "7a76723a-51a5-42b6-9364-57c4e9895be1",
						Reps:   5,
						Weight: 0,
					},
				},
			},
		},
	},
	{
		ID:   "b22e72f7-3197-49a9-9a16-1cd670d4fc49",
		Name: "Swimming Day",
		Date: time.Date(2023, 12, 1, 0, 0, 0, 0, time.UTC),
		Exercises: []exercise{
			{
				ID:   "d133b60b-df73-49bf-a833-43b8cefa14e2",
				Name: "Freestyle",
				Sets: []set{
					{
						ID:     "e20267a3-cd03-4c9a-bbe6-cb3f349172db",
						Reps:   10,
						Weight: 0,
					},
					{
						ID:     "853fb0ed-ea97-4d96-8dc0-20b79f60d4c4",
						Reps:   10,
						Weight: 0,
					},
					{
						ID:     "5ed9c2e6-444e-4464-8e5d-147e147e28a0",
						Reps:   10,
						Weight: 0,
					},
				},
			},
			{
				ID:   "95754711-48b9-4c2b-8c62-ba64ab54449b",
				Name: "Backstroke",
				Sets: []set{
					{
						ID:     "857fb42d-2352-47a1-96ac-1d0e8bdf9d91",
						Reps:   10,
						Weight: 0,
					},
					{
						ID:     "0de3ea8a-18a1-4ea1-9ef0-3ea3d3a4c2dd",
						Reps:   10,
						Weight: 0,
					},
					{
						ID:     "62a06ae1-9571-4c68-9f48-98ed7099036a",
						Reps:   10,
						Weight: 0,
					},
				},
			},
		},
	},
}
