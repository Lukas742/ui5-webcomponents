
/* eslint no-unused-vars: 0 */
import ifDefined from '@ui5/webcomponents-base/src/renderer/ifDefined.js';
import { html, svg, repeat, classMap, styleMap } from '@ui5/webcomponents-base/src/renderer/LitRenderer.js';
const block0 = (context) => { return html`<div		class="${ifDefined(classMap(context.classes.main))}"		style="${ifDefined(styleMap(context.styles.main))}"><!-- INPUT --><ui5-input			id="${ifDefined(context._id)}-inner"			placeholder="${ifDefined(context.placeholder)}"			type="${ifDefined(context.type)}"			value="${ifDefined(context.value)}"			?disabled="${ifDefined(context.disabled)}"			?readonly="${ifDefined(context.readonly)}"			value-state="${ifDefined(context.valueState)}"			@ui5-change="${ifDefined(context._handleInputChange)}"			@ui5-input="${ifDefined(context._handleInputLiveChange)}"			data-sap-focus-ref	>		${ !context.readonly ? block1(context) : undefined }</ui5-input><!-- POPOVER --><ui5-popover			id="${ifDefined(context._id)}-popover"			allow-target-overlap="${ifDefined(context._popover.allowTargetOverlap)}"			placement-type="${ifDefined(context._popover.placementType)}"			no-header			no-arrow			horizontal-align="${ifDefined(context._popover.horizontalAlign)}"			stay-open-on-scroll="${ifDefined(context._popover.stayOpenOnScroll)}"			@ui5-afterClose="${ifDefined(context._popover.afterClose)}"			@ui5-afterOpen="${ifDefined(context._popover.afterOpen)}"	><ui5-calendar				id="${ifDefined(context._id)}-calendar"				primary-calendar-type="${ifDefined(context._calendar.primaryCalendarType)}"				format-pattern="${ifDefined(context._calendar.formatPattern)}"				timestamp="${ifDefined(context._calendar.timestamp)}"				.selectedDates="${ifDefined(context._calendar.selectedDates)}"				@ui5-selectedDatesChange="${ifDefined(context._calendar.onSelectedDatesChange)}"		></ui5-calendar></ui5-popover><slot name="formSupport"></slot></div>`; };
const block1 = (context) => { return html`<ui5-icon				slot="icon"				src="sap-icon://appointment-2"				class="${ifDefined(classMap(context.classes.icon))}"				tabindex="-1"			></ui5-icon>		`; };

export default block0;