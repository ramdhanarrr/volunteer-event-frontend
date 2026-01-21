const events = [
  {
    id: 1,
    title: "Beach Cleanup",
    event_date: "2026-02-10",
    description: "Cleaning beach area together",
  },
  {
    id: 2,
    title: "Tree Planting",
    event_date: "2026-03-01",
    description: "Planting trees for environment",
  },
];

export function getEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 1000);
  });
}

export function getEventById(id) {
  return new Promise((resolve, reject) => {
    const event = events.find((e) => e.id === Number(id));
    setTimeout(() => {
      event ? resolve(event) : reject("Event not found");
    }, 1000);
  });
}

export function joinEvent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Successfully joined the event");
    }, 1000);
  });
}
