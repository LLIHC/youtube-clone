from types import TracebackType
from typing import (
    Any,
    Callable,
    Optional,
    Pattern,
    Tuple,
    Type,
    TypeVar,
    Union,
    overload,
)

import pytest
from _pytest._code import ExceptionInfo
from _pytest.python_api import RaisesContext

_E = TypeVar("_E", bound=BaseException)


class _NormalContext:
    def __enter__(self) -> None:
        return None

    def __exit__(
        self,
        exc_type: Optional[Type[BaseException]],
        exc_val: Optional[BaseException],
        exc_tb: Optional[TracebackType],
    ) -> bool:
        return exc_type is None


@overload
def raiseif(
    condition: bool,
    expected_exception: Union[Type[_E], Tuple[Type[_E], ...]],
    *,
    match: Optional[Union[str, Pattern[str]]] = ...,
) -> Union[_NormalContext, RaisesContext[_E]]:
    ...


@overload
def raiseif(
    condition: bool,
    expected_exception: Union[Type[_E], Tuple[Type[_E], ...]],
    func: Callable[..., Any],
    *args: Any,
    **kwargs: Any,
) -> Union[_NormalContext, ExceptionInfo[_E]]:
    ...


def raiseif(
    condition: bool,
    expected_exception: Union[Type[_E], Tuple[Type[_E], ...]],
    *args: Any,
    **kwargs: Any,
) -> Union[_NormalContext, RaisesContext[_E], ExceptionInfo[_E]]:
    if condition:
        return pytest.raises(expected_exception, *args, **kwargs)
    return _NormalContext()
