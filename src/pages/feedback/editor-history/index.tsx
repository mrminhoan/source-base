import { proxyWithHistory } from 'valtio-history';
import { useSnapshot } from 'valtio';
import { Button, Input } from 'antd';
const { TextArea } = Input;
const textProxy = proxyWithHistory({
  text: 'Add some text to this initial value and then undo/redo',
});
const updateEditor = (value) => {
  textProxy.value.text = value.target.value
};

function EditorHistory() {
  const { value, undo, redo, history, canUndo, canRedo } =
    useSnapshot(textProxy);
  return (
    <>
      <h1>Text Editor</h1>
      <h2>Editor with history</h2>
      {/* <div className="info">
        <span>
          change {history.index + 1} / {history.nodes.length}
        </span>
        <span>|</span>
      </div> */}
      <div className="editor">
        <TextArea value={value.text} onChange={(e) => updateEditor(e)} />
      </div>
      <Button onClick={undo} disabled={!canUndo()}>
        Undo
      </Button>
      <Button onClick={redo} disabled={!canRedo()}>
        Redo
      </Button>
    </>
  );
}

export default EditorHistory;
