import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa'; // npm install react-icons --save (https://react-icons.github.io/react-icons)

import { ImageIcon as ImageIcons } from './basic/ImageIcon';
import { Title as Titles } from './basic/Title';
import { Video as Videos } from './basic/Video';
import { JSONViewer as JSONViewers } from './basic/JSONViewer';
import { Alert as Alerts } from './basic/Alert';
import { BasicButton as BasicButtons } from './button/BasicButton';
import { RoundedButton as RoundedButtons } from './button/RoundedButton';
import { Menu as Menus } from './visual/Menu';
import { VerticalTab as VerticalTabs } from './visual/VerticalTab';
import { TimeLine as TimeLines } from './visual/TimeLine';
import { TableAsset as TableAssets } from './visual/TableAsset';
import { Slider as Sliders } from './visual/Slider';
import { Frame as Frames } from './visual/Frame';
import { Extension as Extensions } from './vscode/Extension';
import { VSRemote as VSRemotes } from './vscode/VSRemote';

//! -----------------> IMAGEICON <------------------- //
//* Required :  img (string) - Imported from a url or a path
//? Optional :  size (string) - Percent
//?             border (boolean)
export const ImageIcon = ({ img, size = '100%', border }) => {
  return <ImageIcons img={img} size={size} border={border} />;
};

//! -----------------> TITLE <------------------- //
//* Required : tile (string)
//? Optional : subtitle (string)
//?            color (string)
//?            center (boolean)
export const Title = ({
  title,
  subtitle = '',
  color = 'var(--colorpage-primary)',
  center,
}) => {
  return (
    <Titles title={title} subtitle={subtitle} color={color} center={center} />
  );
};

//! -----------------> BASIC BUTTON <------------------- //
//* Required : title (string)
//? Optional : route (string)
//?            color (string)
//?            external (boolean)
export const BasicButton = ({
  title,
  route = '',
  color = 'var(--colorpage-primary)',
  external,
}) => {
  return (
    <BasicButtons
      title={title}
      route={route}
      color={color}
      external={external}
    />
  );
};

//! -----------------> RoundedButton <------------------- //
//* Required : title (string)
//*            route (string)
//*            icon (svg)
//? Optional : color (string)
//?          : expand (boolean)
export const RoundedButton = ({
  title,
  route,
  icon = <FaDownload />,
  color = 'var(--colorpage-primary)',
  expand,
}) => {
  return (
    <RoundedButtons
      title={title}
      route={route}
      icon={icon}
      color={color}
      expand={expand}
    />
  );
};

//! -----------------> MENU <------------------- //
//* Required : title (string)
//? Optional : subtitle (string)
//?            color (string)
//?            icon (icon/svg) - from react-icons or url/path
//?            route (string)
//?            small (boolean)
export const Menu = ({
  title,
  subtitle = '',
  color = 'var(--colorpage-primary)',
  icon = <FaArrowRight />,
  route = '',
  small,
}) => {
  return (
    <Menus
      title={title}
      subtitle={subtitle}
      color={color}
      icon={icon}
      route={route}
      small={small}
    />
  );
};

//! -----------------> VIDEO <------------------- //
//? Optional : local (string) - path or url of a video
//?            drive (string) - id video drive
export const Video = ({ local, drive }) => {
  return <Videos local={local} drive={drive} />;
};

//! -----------------> JSONVIEWER <------------------- //
//* Required : json (dict)
//? Optional : expanded (boolean)
export const JSONViewer = ({ json, expanded }) => {
  return <JSONViewers json={json} expanded={expanded} />;
};

//! -----------------> EXTENSION <------------------- //
//* Required : title (string)
//? Optional : description (string)
//?            author (string)
//?            logo (icon/svg) - from react-icons or url/path
//?            link (string) - id extension
export const Extension = ({
  title,
  description = '',
  author = '',
  logo = '',
  link = '',
}) => {
  return (
    <Extensions
      title={title}
      description={description}
      author={author}
      logo={logo}
      link={link}
    />
  );
};

//! -----------------> VSREMOTE <------------------- //
//* Required : title (string)
//*            host (string)
//? Optional : description (string)
//?            color (string)
//?            path (string)
//?            file (string)
export const VSRemote = ({
  title,
  description = '',
  color = 'var(--colorpage-primary)',
  host,
  path = '/',
  file = '',
}) => {
  return (
    <VSRemotes
      title={title}
      description={description}
      color={color}
      host={host}
      path={path}
      file={file}
    />
  );
};

//! -----------------> VERTICALTAB <------------------- //
//* Required : list (list of dict)
//* Required in a "dict" :  name (string)
//*                         content (string)
//? Optional in a "dict" :  title (string)
//?                         textButton (string)
//?                         url (string)
//?                         icon (svg)
//? Optional : color (string)
export const VerticalTab = ({ list, color = 'var(--colorpage-primary)' }) => {
  return <VerticalTabs list={list} color={color} />;
};

//! -----------------> TIMELINE <------------------- //
//* Required : json (dict = {unidad1, unidad11})
//? Optional in a "unidad" :  title (string)
//?                           color (string)
//?                           topics (list of.. )
//?                                 name (string)
//?                                 url (string)
export const TimeLine = ({ json }) => {
  return <TimeLines json={json} />;
};

//! -----------------> SLIDER <------------------- //
//* Required : route (string)
//? Optional : title (string)
//?            colorPrimary (string)
//?            colorSecondary (string)
export const Slider = ({
  title,
  route,
  subtitle = '',
  color = 'var(--colorpage-primary)',
  icon = <FaDownload />,
}) => {
  return (
    <Sliders
      title={title}
      route={route}
      subtitle={subtitle}
      color={color}
      icon={icon}
    />
  );
};

//! -----------------> FRAME <------------------- //
//* Required : url (string)
//? Optional : title (string)
//?            width (string)
//?            height (string)
//?            background (string) - hex "#" or rgb "()"
//?            customStyle (dict)
//?            scroll (boolean)
export const Frame = ({
  url,
  title = 'Page TAB',
  width = '100%',
  height = 'auto',
  background = '#000',
  customStyle = {},
  scroll,
}) => {
  return (
    <Frames
      url={url}
      title={title}
      width={width}
      height={height}
      background={background}
      customStyle={customStyle}
      scroll={scroll}
    />
  );
};

//! -----------------> TABLEASSET <------------------- //
//* Required : list (list of dict)
//* Required in a "dict" :  title (string)
//*                         unicode (string)
//*                         color (string) - hex "#" or rgb "()"
//*                         icon (svg)
//? Optional : title (string)
//?            color (string)
export const TableAsset = ({
  list,
  title = 'Expandir para más información',
  color = 'var(--colorpage-primary)',
}) => {
  return <TableAssets list={list} title={title} color={color} />;
};

//! -----------------> ALERTAS <------------------- //
//? Optional : kind (string)
//?            children (string)
export const Alert = ({ children, kind }) => {
  return <Alerts children={children} kind={kind} />;
};
