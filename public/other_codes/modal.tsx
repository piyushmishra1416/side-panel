import React from 'react';
import { createPortal } from 'react-dom';
import { boundMethod } from 'autobind-decorator';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import CloseIcon from 'mdi-react/CloseIcon';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import Btn from '../Btn';
import LoadingCircle from '../LoadingCircle';
import './styles.css';

const animationDuration: number = 450;
let maximize = true;

interface IModalProps {
  actions?: React.ReactElement<{}>[];
  closeHandler: () => void;
  onMaximizeHandle?: () => void;
  children?: React.ReactNode;
  open: boolean;
  title?: string | React.ReactNode;
  maxZIndex?: boolean;
  // TODO: make 'new' the default across the site
  type?: 'fade' | 'slide' | 'new';
  size?: 'sm' | 'lg';
  target?: string | HTMLElement;
  className?: string;
  loading?: boolean;
  replaceActions?: boolean;
  scrollBody?: boolean;
  isMaximize?: boolean;
}

export default class Modal extends React.Component<IModalProps> {
  public componentDidUpdate({ open: prevOpen }: IModalProps): void {
    const { open } = this.props;

    if (open !== prevOpen) {
      document[`${open ? 'add' : 'remove'}EventListener`](
        'keydown',
        this.handleEsc,
        false,
      );
    }
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleEsc, false);
  }

  @boundMethod
  private handleEsc(e: KeyboardEvent): void {
    if (e.keyCode === 27 && this.props.open) {
      this.props.closeHandler();
    }
  }

  public maximizeHandle = () => {
    console.log('click');
  };

  public onMaximizeHandle = () => {
    console.log(',max shh');
  };
  public render(): React.ReactPortal {
    const {
      actions,
      closeHandler,
      children,
      open,
      title,
      maxZIndex,
      target,
      type,
      size,
      className,
      loading,
      replaceActions,
      scrollBody,
      isMaximize,
    } = this.props;
    const classes: string = cn('modal', className, {
      'modal--max-z': maxZIndex,
      [`modal--type-${type}`]: type,
      [`modal--size-${size}`]: size,
      'modal--replace-actions': replaceActions,
      'modal--scroll-body': scrollBody,
    });
    const portalTarget =
      typeof target === 'string' ? document.querySelector(target) : target;

    return createPortal(
      <CSSTransition
        in={open}
        mountOnEnter
        unmountOnExit
        timeout={animationDuration}
        classNames='modal'
      >
        <div className={classes}>
          <div className='modal__overlay' onClick={closeHandler} />
          {(title || children || actions) && (
            <div
              className={
                isMaximize == true ? 'modal__inner maximize' : 'modal__inner'
              }
            >
              <div className='modal__content'>
                <div className='modal__header'>
                  {type === 'slide' && (
                    <Btn
                      key='close'
                      btnType='flat-icon'
                      onClick={closeHandler}
                      className='modal__header-mobile-close'
                    >
                      <ArrowLeftIcon />
                    </Btn>
                  )}
                  {title && <h2 className='modal__title'>{title}</h2>}
                </div>
                {children && <div className='modal__body'>{children}</div>}
                {actions && (
                  <div className='modal__actions'>
                    {actions}
                    {loading && <LoadingCircle loading={loading} />}
                  </div>
                )}
                {type === 'new' && (
                  <Btn
                    key='close'
                    btnType='flat-icon'
                    onClick={closeHandler}
                    className='modal__close-top'
                  >
                    <CloseIcon />
                  </Btn>
                )}
              </div>
            </div>
          )}
        </div>
      </CSSTransition>,
      portalTarget || document.body,
    );
  }
}

¸