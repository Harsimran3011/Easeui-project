import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Tooltip from "@mui/material/Tooltip";
import ComponentDemo from "../ComponentsDemo";

const TooltipPage = () => {
  const basicToolTip = `
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip() {
  return (
    <div className="flex gap-3">
        <Tooltip title="Delete this item">
            <button className="bg-red-600 cursor-pointer rounded text-white p-2 hover:bg-red-700">
            Delete
            </button>
        </Tooltip>
        <Tooltip title="Add this item">
            <button className="bg-blue-600 cursor-pointer rounded text-white p-2 hover:bg-blue-700">
            Add
            </button>
        </Tooltip>
    </div>
  );
}
`;

  const positionedToolTip = `import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function PositionedTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Tooltip describeChild title="Add" placement="top-start">
          <Button>top-start</Button>
        </Tooltip>
        <Tooltip describeChild title="Add" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip describeChild title="Add" placement="top-end">
          <Button>top-end</Button>
        </Tooltip>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="column" sx={{ alignItems: 'flex-start' }}>
          <Tooltip describeChild title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <Tooltip describeChild title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <Tooltip describeChild title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Stack>
        <Stack direction="column" sx={{ alignItems: 'flex-end' }}>
          <Tooltip describeChild title="Add" placement="right-start">
            <Button>right-start</Button>
          </Tooltip>
          <Tooltip describeChild title="Add" placement="right">
            <Button>right</Button>
          </Tooltip>
          <Tooltip describeChild title="Add" placement="right-end">
            <Button>right-end</Button>
          </Tooltip>
        </Stack>
      </Box>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Tooltip title="Add" placement="bottom-start">
          <Button>bottom-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom-end">
          <Button>bottom-end</Button>
        </Tooltip>
      </Stack>
    </Box>
  );
}
`;

  const arrow = `
  import Button from '@mui/material/Button';
    import Tooltip from '@mui/material/Tooltip';

    export default function ArrowTooltips() {
    return (
        <Tooltip describeChild title="Add" arrow>
        <Button>Arrow</Button>
        </Tooltip>
    );
    }
`;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          Tooltips display informative text when users hover over, focus on, or
          tap an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Tooltip</h2>
        <ComponentDemo code={basicToolTip}>
          <div className="flex gap-3">
            <Tooltip title="Delete this item">
              <button className="bg-red-600 cursor-pointer rounded text-white p-2 hover:bg-red-700">
                Delete
              </button>
            </Tooltip>
            <Tooltip title="Add this item">
              <button className="bg-blue-600 cursor-pointer rounded text-white p-2 hover:bg-blue-700">
                Add
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Positioned tooltips</h2>
        <p>
          The Tooltip has 12 placement choices. They don't have directional
          arrows; instead, they rely on motion emanating from the source to
          convey direction.
        </p>
        <ComponentDemo code={positionedToolTip}>
          <Box sx={{ width: 500 }}>
            <Stack direction="row" sx={{ justifyContent: "center" }}>
              <Tooltip describeChild title="Add" placement="top-start">
                <Button>top-start</Button>
              </Tooltip>
              <Tooltip describeChild title="Add" placement="top">
                <Button>top</Button>
              </Tooltip>
              <Tooltip describeChild title="Add" placement="top-end">
                <Button>top-end</Button>
              </Tooltip>
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Stack direction="column" sx={{ alignItems: "flex-start" }}>
                <Tooltip describeChild title="Add" placement="left-start">
                  <Button>left-start</Button>
                </Tooltip>
                <Tooltip describeChild title="Add" placement="left">
                  <Button>left</Button>
                </Tooltip>
                <Tooltip describeChild title="Add" placement="left-end">
                  <Button>left-end</Button>
                </Tooltip>
              </Stack>
              <Stack direction="column" sx={{ alignItems: "flex-end" }}>
                <Tooltip describeChild title="Add" placement="right-start">
                  <Button>right-start</Button>
                </Tooltip>
                <Tooltip describeChild title="Add" placement="right">
                  <Button>right</Button>
                </Tooltip>
                <Tooltip describeChild title="Add" placement="right-end">
                  <Button>right-end</Button>
                </Tooltip>
              </Stack>
            </Box>
            <Stack direction="row" sx={{ justifyContent: "center" }}>
              <Tooltip title="Add" placement="bottom-start">
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom-end">
                <Button>bottom-end</Button>
              </Tooltip>
            </Stack>
          </Box>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Arrow Tooltip</h2>
        <p>
          You can use the arrow prop to give your tooltip an arrow indicating
          which element it refers to.
        </p>
        <ComponentDemo code={arrow}>
          <div className="flex gap-3">
            <Tooltip describeChild title="This is arrow" arrow>
              <button className="cursor-pointer p-2 text-white bg-blue-500 rounded">
                Arrow
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>
    </div>
  );
};

export default TooltipPage;
