
/* eslint no-unused-vars: 0 */
import ifDefined from '@ui5/webcomponents-base/src/renderer/ifDefined.js';
import { html, svg, repeat, classMap, styleMap } from '@ui5/webcomponents-base/src/renderer/LitRenderer.js';
const block0 = (context) => { return html`<div class="${ifDefined(classMap(context.classes.main))}" style="${ifDefined(styleMap(context.styles.main))}"><ui5-calendar-header		id="${ifDefined(context._id)}-head"		month-text="${ifDefined(context._header.monthText)}"		year-text="${ifDefined(context._header.yearText)}"		.primaryCalendarType="${ifDefined(context._oMonth.primaryCalendarType)}"		@ui5-pressPrevious="${ifDefined(context._header.onPressPrevious)}"		@ui5-pressNext="${ifDefined(context._header.onPressNext)}"		@ui5-btn1Press="${ifDefined(context._header.onBtn1Press)}"		@ui5-btn2Press="${ifDefined(context._header.onBtn2Press)}"	></ui5-calendar-header><div id="${ifDefined(context._id)}-content" class="sapUiCalContent"><ui5-daypicker			id="${ifDefined(context._id)}-daypicker"			class="${ifDefined(classMap(context.classes.dayPicker))}"			format-pattern="${ifDefined(context._oMonth.formatPattern)}"			.selectedDates="${ifDefined(context._oMonth.selectedDates)}"			._hidden="${ifDefined(context._oMonth._hidden)}"			.primaryCalendarType="${ifDefined(context._oMonth.primaryCalendarType)}"			timestamp="${ifDefined(context._oMonth.timestamp)}"			@ui5-selectionChange="${ifDefined(context._oMonth.onSelectedDatesChange)}"			@ui5-navigate="${ifDefined(context._oMonth.onNavigate)}"		></ui5-daypicker><ui5-month-picker			id="${ifDefined(context._id)}-MP"			class="${ifDefined(classMap(context.classes.monthPicker))}"			._hidden="${ifDefined(context._monthPicker._hidden)}"			.primaryCalendarType="${ifDefined(context._oMonth.primaryCalendarType)}"			timestamp="${ifDefined(context._monthPicker.timestamp)}"			@ui5-selectedMonthChange="${ifDefined(context._monthPicker.onSelectedMonthChange)}"		></ui5-month-picker><ui5-yearpicker				id="${ifDefined(context._id)}-YP"				class="${ifDefined(classMap(context.classes.yearPicker))}"				._hidden="${ifDefined(context._yearPicker._hidden)}"				.primaryCalendarType="${ifDefined(context._oMonth.primaryCalendarType)}"				timestamp="${ifDefined(context._yearPicker.timestamp)}"				._selectedYear="${ifDefined(context._yearPicker._selectedYear)}"				@ui5-selectedYearChange="${ifDefined(context._yearPicker.onSelectedYearChange)}"		></ui5-yearpicker></div></div>`; };

export default block0;