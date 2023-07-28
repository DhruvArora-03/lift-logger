import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import WorkoutCard from "@/components/WorkoutCard";

export default function Workouts() {
  return (
    <View style={styles.page}>
      {workoutData.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
  },
});

const workoutData = [
  {
    id: "15cb2e9e-eb2a-47bf-95b3-e694b3c19d77",
    name: "Chest Day",
    date: new Date(2023, 2, 11),
    exercises: [
      {
        id: "fce8a95d-5cf2-4eac-853e-015fe6efb9f8",
        name: "Bench Press",
        sets: [
          {
            id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5d",
            reps: 5,
            weight: 135,
          },
          {
            id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5e",
            reps: 5,
            weight: 185,
          },
          {
            id: "a0b1c2d3-e4f5-6a7b-8c9d-0e1f2a3b4c5f",
            reps: 5,
            weight: 205,
          },
        ],
      },
    ],
  },
  {
    id: "94eef2c4-5c89-4565-85b2-918a98b4e012",
    name: "Leg Day",
    date: new Date(2023, 0, 19),
    exercises: [
      {
        id: "92e1c5e1-0b31-4e5e-980d-3a487e1e52d7",
        name: "Squats",
        sets: [
          {
            id: "b1e8949a-94d8-4aa0-b2e5-68427c7266a7",
            reps: 8,
            weight: 225,
          },
          {
            id: "83a3f3b0-7e94-4029-a14a-70484982b56e",
            reps: 8,
            weight: 245,
          },
          {
            id: "4d2b8319-bb0e-4a82-9f04-781a5b849366",
            reps: 8,
            weight: 265,
          },
        ],
      },
      {
        id: "c4777bf0-508c-411f-ba22-d888c7822e0e",
        name: "Leg Press",
        sets: [
          {
            id: "799c028a-7785-49d6-94a4-52c5be1b9a7c",
            reps: 10,
            weight: 300,
          },
          {
            id: "f99835a1-b4db-4dc2-b40f-c5f5fc595163",
            reps: 10,
            weight: 350,
          },
          {
            id: "1c4a9811-3f0f-49aa-8b71-4933df7a00e8",
            reps: 10,
            weight: 400,
          },
        ],
      },
    ],
  },
  {
    id: "5e01a40d-27d6-4aa4-9e2c-b32c7115f04b",
    name: "Back Day",
    date: new Date(2023, 1, 6),
    exercises: [
      {
        id: "d48fb7d3-c7a1-471d-98d3-16076947b06d",
        name: "Deadlifts",
        sets: [
          {
            id: "be751312-8884-460f-8ee1-2e7eb967648a",
            reps: 6,
            weight: 225,
          },
          {
            id: "52c10f45-05c6-4bcf-898d-7be63d982387",
            reps: 6,
            weight: 275,
          },
          {
            id: "d67078c6-0c16-4297-9084-0d96b1c947f9",
            reps: 6,
            weight: 315,
          },
        ],
      },
    ],
  },
  {
    id: "154cafe4-ba94-456c-8215-68867e30af26",
    name: "Shoulder Day",
    date: new Date(2023, 4, 2),
    exercises: [
      {
        id: "9c669f39-12e5-4f3b-b73c-e421d27c6f50",
        name: "Military Press",
        sets: [
          {
            id: "6b8030c9-9b7a-48df-a66a-23b3d269c5e9",
            reps: 8,
            weight: 95,
          },
          {
            id: "7c13438a-c5ea-4997-bdd4-94f0a3927265",
            reps: 8,
            weight: 115,
          },
          {
            id: "ba496097-19b6-40c5-bd5e-47b3c4e30a7e",
            reps: 8,
            weight: 135,
          },
        ],
      },
      {
        id: "b1cd6a5d-2093-4af9-a287-811735e5e4e2",
        name: "Lateral Raises",
        sets: [
          {
            id: "5a3987f6-07bf-456e-ae6a-59d3310e2e21",
            reps: 12,
            weight: 25,
          },
          {
            id: "c16fc3bf-4d2c-47f0-9f09-582015e3d47c",
            reps: 12,
            weight: 30,
          },
          {
            id: "6cbb243b-03d1-4a1e-ba26-e7c6df44e541",
            reps: 12,
            weight: 35,
          },
        ],
      },
    ],
  },
  {
    id: "38a53a58-b7c7-4235-9e09-0d6617dbb2af",
    name: "Arm Day",
    date: new Date(2023, 3, 17),
    exercises: [
      {
        id: "63c0ac4a-120a-4eb3-a126-50f2383eb9b0",
        name: "Bicep Curls",
        sets: [
          {
            id: "d42a925e-6c5e-404c-92b3-4a1f154b5a24",
            reps: 10,
            weight: 30,
          },
          {
            id: "317946d6-df6f-47f7-b4c2-1ea7a7b26ee3",
            reps: 10,
            weight: 35,
          },
          {
            id: "f19e8dc1-62b5-43fc-bb0d-e46c6a0f7e86",
            reps: 10,
            weight: 40,
          },
        ],
      },
      {
        id: "af6e4b68-0c25-451e-821c-e5d3b916ac3d",
        name: "Tricep Dips",
        sets: [
          {
            id: "ec33ce3f-5d6a-4b69-9035-8d1b6970c37d",
            reps: 12,
            weight: 0,
          },
          {
            id: "b7c171e3-e135-4a07-9a50-8d1c5f48ed7c",
            reps: 12,
            weight: 0,
          },
          {
            id: "4385b102-697d-4a47-bdda-149e87d0d882",
            reps: 12,
            weight: 0,
          },
        ],
      },
    ],
  },
  {
    id: "ad2a5d25-961a-4f11-b3af-8a18e9ca50b7",
    name: "Cardio Day",
    date: new Date(2023, 5, 22),
    exercises: [
      {
        id: "70ac7d9d-15e8-47a6-936e-940dd9db8577",
        name: "Running",
        sets: [
          {
            id: "63f1b03c-2346-4af7-9532-c1599f4cf832",
            reps: 1,
            weight: 0,
          },
          {
            id: "01f1a3b0-e2d2-45c6-bb3c-38be4b8c5fc3",
            reps: 1,
            weight: 0,
          },
          {
            id: "8644ed01-07ed-47e6-80b2-ae09b3c24a44",
            reps: 1,
            weight: 0,
          },
        ],
      },
      {
        id: "8ebcdd43-c0e0-4eeb-89fc-220aa8d7cb09",
        name: "Cycling",
        sets: [
          {
            id: "34de3d90-3f25-4bb0-83d7-d30cf22cebb6",
            reps: 1,
            weight: 0,
          },
          {
            id: "94f87a61-4c67-4e15-9f07-515e9df825e9",
            reps: 1,
            weight: 0,
          },
          {
            id: "1d34641e-2062-4e57-836e-42ab8113b738",
            reps: 1,
            weight: 0,
          },
        ],
      },
    ],
  },
  {
    id: "eaaf938c-c7a6-4c7d-b0c3-3b40419e85ef",
    name: "Core Day",
    date: new Date(2023, 6, 14),
    exercises: [
      {
        id: "978f96f2-2d4a-46f2-8309-e5c3ac0f8960",
        name: "Planks",
        sets: [
          {
            id: "2b64684a-0499-43f2-9a3c-cf942e66952e",
            reps: 1,
            weight: 0,
          },
          {
            id: "91d9299b-3bf0-42c0-9a1c-0e0c3a628a06",
            reps: 1,
            weight: 0,
          },
          {
            id: "5d0afcd2-dde9-4d2e-bd92-41b769ff79a2",
            reps: 1,
            weight: 0,
          },
        ],
      },
      {
        id: "3f657204-3ca5-42a7-bb11-2c6d39f22e46",
        name: "Russian Twists",
        sets: [
          {
            id: "d90bb374-3f4b-43da-9f9f-ef183f7b5644",
            reps: 20,
            weight: 0,
          },
          {
            id: "ad740e59-970e-4a27-9b9f-27c8f5f859e9",
            reps: 20,
            weight: 0,
          },
          {
            id: "0452c0c5-cdef-42f9-aa83-d82f53071f56",
            reps: 20,
            weight: 0,
          },
        ],
      },
    ],
  },
  {
    id: "520b9031-6785-4392-bb5f-862d0067a006",
    name: "Yoga Day",
    date: new Date(2023, 7, 3),
    exercises: [
      {
        id: "d7e6b46f-5c49-4e6a-8a3c-124d22a5ec2d",
        name: "Sun Salutations",
        sets: [
          {
            id: "4c4f8140-97f2-4b77-97c9-7cd0620d6783",
            reps: 3,
            weight: 0,
          },
          {
            id: "b9c366a5-1615-4e3a-8351-6602b8c06585",
            reps: 3,
            weight: 0,
          },
          {
            id: "b93c0016-7c17-4eb9-8fe7-33b6bdc6239e",
            reps: 3,
            weight: 0,
          },
        ],
      },
      {
        id: "328271a7-d642-4e35-88ab-47e65ea0b4d6",
        name: "Warrior Pose",
        sets: [
          {
            id: "dedd58e9-c0c6-4381-8c79-726e30c37c31",
            reps: 5,
            weight: 0,
          },
          {
            id: "bdfb25e8-9a0c-4f68-a0b8-7b2c9cfe2c3b",
            reps: 5,
            weight: 0,
          },
          {
            id: "dcce2f39-77b6-4a8a-8a68-4da42e7c8d0f",
            reps: 5,
            weight: 0,
          },
        ],
      },
    ],
  },
  {
    id: "a8ac9b02-ff9c-4181-926c-e7b63066a4d3",
    name: "Rest Day",
    date: new Date(2023, 8, 9),
    exercises: [],
  },
  {
    id: "45a542af-cc17-4f65-920d-dfcf6d1c93b7",
    name: "Full-Body Day",
    date: new Date(2023, 9, 27),
    exercises: [
      {
        id: "dc702b86-4b62-4413-99c6-015e185f3cd6",
        name: "Push-ups",
        sets: [
          {
            id: "c3f76778-40c0-4a67-84e1-0c8c80bce9ef",
            reps: 12,
            weight: 0,
          },
          {
            id: "3dbbdd54-5646-4dd0-9c67-8da1d8f65e14",
            reps: 12,
            weight: 0,
          },
          {
            id: "a60e74d2-3c0f-42cd-8835-49172ac1cd4b",
            reps: 12,
            weight: 0,
          },
        ],
      },
      {
        id: "b931af78-6f7d-45e0-9243-85366ebd446d",
        name: "Pull-ups",
        sets: [
          {
            id: "2c77c232-1d10-4a59-ba13-59e48a54eaa3",
            reps: 8,
            weight: 0,
          },
          {
            id: "3d78fcbe-9c54-454e-b811-133b553a5ce6",
            reps: 8,
            weight: 0,
          },
          {
            id: "89c3001b-4ec0-47a0-b5f3-6420e0e24c1a",
            reps: 8,
            weight: 0,
          },
        ],
      },
      {
        id: "8f4aee3c-07f6-4bb7-889e-2de8350838ab",
        name: "Squats",
        sets: [
          {
            id: "bcb44e61-20ed-447d-8c5e-e6b9b27e0f24",
            reps: 10,
            weight: 135,
          },
          {
            id: "c4c71650-8745-4f3d-8ee2-28da14f9da3a",
            reps: 10,
            weight: 155,
          },
          {
            id: "be8947d5-75d6-4a0e-9ef1-76f3964c3cd3",
            reps: 10,
            weight: 185,
          },
        ],
      },
    ],
  },
  {
    id: "968f7de0-dbb5-4145-8e3e-4ffae0239e2c",
    name: "HIIT Day",
    date: new Date(2023, 10, 15),
    exercises: [
      {
        id: "98200a3b-87aa-47be-b85a-7540e2d835e9",
        name: "Burpees",
        sets: [
          {
            id: "9c15a5f0-d4ed-49c6-87df-0c4b80e0df1e",
            reps: 15,
            weight: 0,
          },
          {
            id: "27d35600-d73c-4da4-b3eb-b011ecde6017",
            reps: 15,
            weight: 0,
          },
          {
            id: "bb91fbcf-bcdd-41db-8123-cc1c124fe630",
            reps: 15,
            weight: 0,
          },
        ],
      },
      {
        id: "b1c6a250-5112-4abf-94bc-41bf3a881ba3",
        name: "Jumping Jacks",
        sets: [
          {
            id: "0c9a78a2-3cf2-4f3b-94ab-8d9d902a500c",
            reps: 20,
            weight: 0,
          },
          {
            id: "b151fb43-1455-4a1f-a2e2-95d06e3b44d3",
            reps: 20,
            weight: 0,
          },
          {
            id: "73a2439a-d5cc-4825-b37d-0e1b8317f238",
            reps: 20,
            weight: 0,
          },
        ],
      },
    ],
  },
  {
    id: "cd33c0ad-eab6-4162-a081-c2de48de8c7f",
    name: "Flexibility Day",
    date: new Date(2023, 11, 8),
    exercises: [
      {
        id: "6a8f4685-1e20-481d-bd4f-1d3da6054c07",
        name: "Forward Bend",
        sets: [
          {
            id: "5f14b4e9-1af2-4fa9-90db-7cde39ec5a85",
            reps: 5,
            weight: 0,
          },
          {
            id: "3f68918a-ba94-40eb-bb6c-2ed0b6c4c8d9",
            reps: 5,
            weight: 0,
          },
          {
            id: "d69b1bff-99d1-42ad-9ae9-ccfbcb318671",
            reps: 5,
            weight: 0,
          },
        ],
      },
      {
        id: "d99e6b0e-7632-44c5-af4e-6a0817e89dc2",
        name: "Quad Stretch",
        sets: [
          {
            id: "05ddc536-e956-46e7-86f7-ec92a3ef464d",
            reps: 5,
            weight: 0,
          },
          {
            id: "e2d8fc8b-96c4-4419-8f4f-af9afbd68c86",
            reps: 5,
            weight: 0,
          },
          {
            id: "7a76723a-51a5-42b6-9364-57c4e9895be1",
            reps: 5,
            weight: 0,
          },
        ],
      },
    ],
  },
  {
    id: "b22e72f7-3197-49a9-9a16-1cd670d4fc49",
    name: "Swimming Day",
    date: new Date(2023, 12, 1),
    exercises: [
      {
        id: "d133b60b-df73-49bf-a833-43b8cefa14e2",
        name: "Freestyle",
        sets: [
          {
            id: "e20267a3-cd03-4c9a-bbe6-cb3f349172db",
            reps: 10,
            weight: 0,
          },
          {
            id: "853fb0ed-ea97-4d96-8dc0-20b79f60d4c4",
            reps: 10,
            weight: 0,
          },
          {
            id: "5ed9c2e6-444e-4464-8e5d-147e147e28a0",
            reps: 10,
            weight: 0,
          },
        ],
      },
      {
        id: "95754711-48b9-4c2b-8c62-ba64ab54449b",
        name: "Backstroke",
        sets: [
          {
            id: "857fb42d-2352-47a1-96ac-1d0e8bdf9d91",
            reps: 10,
            weight: 0,
          },
          {
            id: "0de3ea8a-18a1-4ea1-9ef0-3ea3d3a4c2dd",
            reps: 10,
            weight: 0,
          },
          {
            id: "62a06ae1-9571-4c68-9f48-98ed7099036a",
            reps: 10,
            weight: 0,
          },
        ],
      },
    ],
  },
];
