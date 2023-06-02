import React from "react";
import {
  Layer,
  Path,
  Rect,
  Shape,
  Stage,
  Image,
  Text,
  Group,
} from "react-konva";
import { ColorFormats } from "tinycolor2";
import useImage from "use-image";
import { generatePalette, TechaeonPalette } from "../../utils";

interface Props {
  scale: number;
  shape: string;
  color: ColorFormats.RGB;
  image: string;
}

const TechaeonCoin3BackSide = ({
  scale,
  shape,
  color,
  image: imageUrl,
}: Props) => {
  const palette = generatePalette(color);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const grd = ctx?.createLinearGradient(0, 50, 90, 100);
  grd?.addColorStop(0.0, palette[100]);
  grd?.addColorStop(1 / 3, palette[500]);
  grd?.addColorStop(1 / 2, palette[200]);
  grd?.addColorStop(1, palette[800]);

  const size = 240;
  const bezel = size * 0.07;

  const fullSize = (bezel + size) * scale;

  const [image] = useImage(imageUrl ? imageUrl : "");

  const locationIconPath =
    "M 7.6601 4.4455 C 8.1428 4.4455 8.6058 4.6373 8.9471 4.9786 C 9.2884 5.32 9.4802 5.7829 9.4802 6.2656 C 9.4802 6.5047 9.4331 6.7413 9.3416 6.9622 C 9.2502 7.183 9.1161 7.3836 8.9471 7.5526 C 8.7781 7.7217 8.5774 7.8557 8.3566 7.9472 C 8.1358 8.0387 7.8991 8.0857 7.6601 8.0857 C 7.1774 8.0857 6.7144 7.894 6.3731 7.5526 C 6.0317 7.2113 5.84 6.7484 5.84 6.2656 C 5.84 5.7829 6.0317 5.32 6.3731 4.9786 C 6.7144 4.6373 7.1774 4.4455 7.6601 4.4455 Z M 7.6601 1.1693 C 9.0117 1.1693 10.308 1.7063 11.2637 2.662 C 12.2195 3.6177 12.7564 4.914 12.7564 6.2656 C 12.7564 10.0878 7.6601 15.7302 7.6601 15.7302 C 7.6601 15.7302 2.5638 10.0878 2.5638 6.2656 C 2.5638 4.914 3.1007 3.6177 4.0564 2.662 C 5.0122 1.7063 6.3085 1.1693 7.6601 1.1693 M 7.6601 2.6254 C 6.6946 2.6254 5.7687 3.0089 5.0861 3.6916 C 4.4034 4.3743 4.0199 5.3002 4.0199 6.2656 C 4.0199 6.9937 4.0199 8.4498 7.6601 13.3349 C 11.3003 8.4498 11.3003 6.9937 11.3003 6.2656 C 11.3003 5.3002 10.9167 4.3743 10.2341 3.6916 C 9.5514 3.0089 8.6255 2.6254 7.6601 2.6254 V 2.6254 Z";
  const timeIconPath =
    "M 8.5352 12.6881 C 9.9082 12.6881 11.2251 12.1426 12.196 11.1718 C 13.167 10.2008 13.7124 8.884 13.7124 7.5109 C 13.7124 6.1378 13.167 4.821 12.196 3.8501 C 11.2251 2.8792 9.9082 2.3337 8.5352 2.3337 C 7.1621 2.3337 5.8453 2.8792 4.8743 3.8501 C 3.9034 4.821 3.358 6.1378 3.358 7.5109 C 3.358 8.884 3.9034 10.2008 4.8743 11.1718 C 5.8453 12.1426 7.1621 12.6881 8.5352 12.6881 Z M 8.5352 1.0394 C 9.385 1.0394 10.2266 1.2068 11.0117 1.532 C 11.7969 1.8572 12.5103 2.3339 13.1112 2.9349 C 13.7122 3.5358 14.1888 4.2492 14.5141 5.0344 C 14.8393 5.8195 15.0066 6.6611 15.0066 7.5109 C 15.0066 9.2273 14.3249 10.8733 13.1112 12.087 C 11.8976 13.3006 10.2515 13.9824 8.5352 13.9824 C 4.9564 13.9824 2.0637 11.0702 2.0637 7.5109 C 2.0637 5.7946 2.7455 4.1485 3.9591 2.9349 C 5.1728 1.7212 6.8188 1.0394 8.5352 1.0394 Z M 8.8587 4.2752 V 7.6727 L 11.771 9.4006 L 11.2856 10.1966 L 7.888 8.1581 V 4.2752 H 8.8587 Z";

  return (
    <Stage width={fullSize} height={fullSize} scale={{ x: scale, y: scale }}>
      <Layer
        clipFunc={(ctx) => {
          const path = new Path2D(shape);
          ctx.rect(fullSize, 0, -fullSize, fullSize);
          ctx._context.clip(path);
        }}
        x={bezel / 2}
        y={bezel / 2}
        width={fullSize}
      >
        <Path
          data={shape}
          // fill={palette[900]}
          fillLinearGradientStartPoint={{ x: 0, y: 0 }}
          fillLinearGradientEndPoint={{ x: 0, y: size }}
          fillLinearGradientColorStops={[
            0.8,
            palette[600],
            1,
            palette[700],
            0.2,
            palette[900],
          ]}
        />
        <Group y={60}>
          <Text
            text="The Last Shadow Puppets"
            align="center"
            fontSize={22}
            fontStyle="bold"
            fontFamily="Neue-Kabel"
            width={fullSize - 45}
            x={15}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 0, y: size }}
            fillLinearGradientColorStops={[0, palette[1100], 1, palette[1100]]}
            shadowColor={palette[300]}
            shadowEnabled
            shadowOffsetX={-1.6}
            shadowOffsetY={1.6}
            shadowBlur={2.3}
          />
          <Group x={63} y={60}>
            <Rect
              width={fullSize - 140}
              height={30}
              fill={palette[600]}
              cornerRadius={5}
              shadowBlur={5}
              shadowOffsetX={0}
              shadowOffsetY={3}
              shadowColor={palette[900]}
            />
            <Text
              x={8}
              y={8}
              text="29 Dec 2023"
              align="center"
              fontSize={18}
              fontStyle="bold"
              fontFamily="Neue-Kabel"
              fillLinearGradientStartPoint={{ x: 0, y: 0 }}
              fillLinearGradientEndPoint={{ x: 0, y: size }}
              fillLinearGradientColorStops={[
                0,
                palette[1100],
                1,
                palette[1100],
              ]}
              shadowColor={palette[200]}
              shadowEnabled
              shadowOffsetX={-1.6}
              shadowOffsetY={1.6}
              shadowBlur={2.3}
            />
          </Group>
          <Group x={40} y={102}>
            <Group>
              <Path
                y={-5}
                data={locationIconPath}
                fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                fillLinearGradientEndPoint={{ x: 0, y: 20 }}
                fillLinearGradientColorStops={[
                  0,
                  palette[1100],
                  1,
                  palette[1100],
                ]}
                shadowColor={palette[300]}
                shadowEnabled
                shadowOffsetX={-1.6}
                shadowOffsetY={1.6}
                shadowBlur={2.3}
              />

              <Text
                x={20}
                text="Indio CA"
                align="center"
                fontSize={13}
                fontStyle="bold"
                fontFamily="Neue-Kabel"
                fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                fillLinearGradientEndPoint={{ x: 0, y: size }}
                fillLinearGradientColorStops={[
                  0,
                  palette[1100],
                  1,
                  palette[1100],
                ]}
                shadowColor={palette[300]}
                shadowEnabled
                shadowOffsetX={-1.6}
                shadowOffsetY={1.6}
                shadowBlur={2.3}
              />
            </Group>
            <Group x={90}>
              <Path
                y={-3}
                data={timeIconPath}
                fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                fillLinearGradientEndPoint={{ x: 0, y: 20 }}
                fillLinearGradientColorStops={[
                  0,
                  palette[1100],
                  1,
                  palette[1100],
                ]}
                shadowColor={palette[300]}
                shadowEnabled
                shadowOffsetX={-1.6}
                shadowOffsetY={1.6}
                shadowBlur={2.3}
              />
              <Text
                x={20}
                text="10:00pm"
                align="center"
                fontSize={13}
                fontStyle="bold"
                fontFamily="Neue-Kabel"
                fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                fillLinearGradientEndPoint={{ x: 0, y: size }}
                fillLinearGradientColorStops={[
                  0,
                  palette[1100],
                  1,
                  palette[1100],
                ]}
                shadowColor={palette[300]}
                shadowEnabled
                shadowOffsetX={-1.6}
                shadowOffsetY={1.6}
                shadowBlur={2.3}
              />
            </Group>
          </Group>
          <Group x={68} y={125}>
            <Text
              text="ID:3738388393993"
              align="center"
              fontSize={13}
              fontStyle="bold"
              fontFamily="Neue-Kabel"
              fillLinearGradientStartPoint={{ x: 0, y: 0 }}
              fillLinearGradientEndPoint={{ x: 0, y: size }}
              fillLinearGradientColorStops={[
                0,
                palette[1100],
                1,
                palette[1100],
              ]}
              shadowColor={palette[300]}
              shadowEnabled
              shadowOffsetX={-1.6}
              shadowOffsetY={1.6}
              shadowBlur={2.3}
            />
          </Group>
        </Group>
      </Layer>
      {/* bezel */}
      <Layer style={{ overflow: "hidden" }} x={bezel / 2} y={bezel / 2}>
        <Path data={shape} strokeWidth={bezel} stroke={grd} />
      </Layer>
    </Stage>
  );
};

export default TechaeonCoin3BackSide;
