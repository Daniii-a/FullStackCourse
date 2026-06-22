# Excersice : Mermaid Flow (New Note)

```mermaid
flowchart TD
    A["User writes a note"] --> B["User clicks the 'save' button"]
    B --> C["Javascript reads the event"]
    C --> D["Sends a POST Request to '/exampleapp/new_note'"]
    D --> E["Server receives the POST Request"]
    E --> F["Server checks the note"]
    F --> G["Is a valid note?"]

    G -->|NO| I["Server gives back 'error'"]
    I --> J["Displays the error message"]

    G -->|YES| K["Server saves the note"]
    K --> L["Server gives back 'redirect 302' to '/notes'"]
    L --> M["Load HTML of '/notes'"]
    M --> N["Javascript do fetch to '/exampleapp/data.json'"]
    N --> P["Server gives back the JSON file updated"]
    P --> Q["Javascript renders the notes"]
    Q --> R["The new note appears in the list"]
    R --> S["The page do a update with the new note inside"]
