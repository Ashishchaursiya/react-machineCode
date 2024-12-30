export const fileData  = {
    name: "MACHINE-CODE-REACT",
    type: "folder",
    children: [
      {
        name: "node_modules",
        type: "folder",
        children: [] // Contains installed dependencies (left empty for simplicity)
      },
      {
        name: "public",
        type: "folder",
        children: [
          {
            name: "favicon.ico",
            type: "file",
            children: null
          },
          {
            name: "robots.txt",
            type: "file",
            children: null
          }
        ]
      },
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              {
                name: "modal",
                type: "folder",
                children: [
                  {
                    name: "common",
                    type: "folder",
                    children: [
                      {
                        name: "ModalHeader.jsx",
                        type: "file",
                        children: null
                      },
                      {
                        name: "ModalFooter.jsx",
                        type: "file",
                        children: null
                      },
                      {
                        name: "ModalBody.jsx",
                        type: "file",
                        children: null
                      }
                    ]
                  }
                ]
              },
              {
                name: "Button.jsx",
                type: "file",
                children: null
              },
              {
                name: "Card.jsx",
                type: "file",
                children: null
              }
            ]
          },
          {
            name: "App.jsx",
            type: "file",
            children: null
          },
          {
            name: "index.css",
            type: "file",
            children: null
          },
          {
            name: "main.jsx",
            type: "file",
            children: null
          }
        ]
      },
      {
        name: ".gitignore",
        type: "file",
        children: null
      },
      {
        name: "eslint.config.js",
        type: "file",
        children: null
      },
      {
        name: "index.html",
        type: "file",
        children: null
      },
      {
        name: "package-lock.json",
        type: "file",
        children: null
      },
      {
        name: "package.json",
        type: "file",
        children: null
      },
      {
        name: "README.md",
        type: "file",
        children: null
      },
      {
        name: "vite.config.js",
        type: "file",
        children: null
      }
    ]
  };

export const dragData = {
  todo: [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Learn Vue" },
    { id: 3, task: "Learn Angular" },
    { id: 4, task: "Learn Svelte" }
  ],
  done: [
    { id: 5, task: "Learn Node" },
    { id: 6, task: "Learn Express" },
    { id: 7, task: "Learn MongoDB" }
  ],
  inProgress: [
    { id: 8, task: "Learn TypeScript" },
    { id: 9, task: "Learn JavaScript" }
  ]
}

export const images = [
  { download_url: "https://picsum.photos/id/0/5000/3333" },
  { download_url: "https://picsum.photos/id/1/5000/3333" },
  { download_url: "https://picsum.photos/id/2/5000/3333" },
  { download_url: "https://picsum.photos/id/3/5000/3333" },
  { download_url: "https://picsum.photos/id/4/5000/3333" },
  { download_url: "https://picsum.photos/id/5/5000/3334" },
  { download_url: "https://picsum.photos/id/6/5000/3333" }
];
export const steps = [
  { id: 1, title: "Step 1", content: "This is the content of step 1" },
  { id: 2, title: "Step 2", content: "This is the content of step 2" },
  { id: 3, title: "Step 3", content: "This is the content of step 3" },
  { id: 4, title: "Step 4", content: "This is the content of step 4" }
]