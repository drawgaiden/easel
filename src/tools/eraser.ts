import { ToolSettings } from '../util';
import PencilTool from './pencil';

export default class EraserTool extends PencilTool {
    private backgroundColor: string;

    constructor(
        finalCtx: CanvasRenderingContext2D,
        draftCtx: CanvasRenderingContext2D,
        settings: ToolSettings,
        backgroundColor: string
    ) {
        super(finalCtx, draftCtx, settings);
        this.backgroundColor = backgroundColor;
    }

    _resetCtx(ctx: CanvasRenderingContext2D, settings: ToolSettings) {
        settings.strokeStyle = this.backgroundColor;
        super._resetCtx(ctx, settings);
    }
}