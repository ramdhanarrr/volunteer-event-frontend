const events = [
  {
    id: 1,
    title: "Bersih-Bersih Pantai",
    event_date: "2026-02-10",
    description:
      "Seru-seruan bareng bersihin pesisir pantai dari sampah plastik.",
  },
  {
    id: 2,
    title: "Tanam Pohon Bareng",
    event_date: "2026-03-01",
    description:
      "Aksi nyata buat bumi, tanam bibit pohon untuk masa depan yang lebih hijau.",
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
      event ? resolve(event) : reject("Yah, kegiatannya nggak ketemu nih.");
    }, 1000);
  });
}

export function joinEvent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mantap! Kamu resmi bergabung di kegiatan ini.");
    }, 1000);
  });
}
