import {
  Menubar,
  MenubarDivider,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../src/components/Menubar";

export const meta = { id: "menubar", title: "Menubar" };

export default function MenubarSection() {
  return (
    <>
      <p className="text-subtle">
        File/Edit-style cascading menus — popovers all the way down. Export
        opens a nested submenu; every leaf item dismisses the chain.
      </p>
      <Menubar
        label="App menu"
        className="border rounded"
        style={{ maxWidth: 480 }}
      >
        <MenubarTrigger menuId="demo-mb-file">File</MenubarTrigger>
        <MenubarMenu id="demo-mb-file">
          <MenubarItem dismisses="demo-mb-file" kbd="⌘N">
            New issue
          </MenubarItem>
          <MenubarItem dismisses="demo-mb-file">New sprint</MenubarItem>
          <MenubarItem opens="demo-mb-export">Export</MenubarItem>
          <MenubarMenu id="demo-mb-export" submenu>
            <MenubarItem dismisses="demo-mb-file">CSV</MenubarItem>
            <MenubarItem dismisses="demo-mb-file">JSON</MenubarItem>
          </MenubarMenu>
          <MenubarDivider />
          <MenubarItem dismisses="demo-mb-file">Archive project</MenubarItem>
        </MenubarMenu>

        <MenubarTrigger menuId="demo-mb-edit">Edit</MenubarTrigger>
        <MenubarMenu id="demo-mb-edit">
          <MenubarItem dismisses="demo-mb-edit" kbd="⌘Z">
            Undo
          </MenubarItem>
          <MenubarItem disabled kbd="⇧⌘Z">
            Redo
          </MenubarItem>
        </MenubarMenu>

        <MenubarTrigger menuId="demo-mb-view">View</MenubarTrigger>
        <MenubarMenu id="demo-mb-view">
          <MenubarItem dismisses="demo-mb-view" selected>
            Board
          </MenubarItem>
          <MenubarItem dismisses="demo-mb-view">Timeline</MenubarItem>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
