import { UilPlusCircle } from '@iconscout/react-unicons'
import React from 'react'

import { Criteria, Options } from '../../../utils/types/global'

interface SuggestionItemProps {
    suggestionItem: Options | Criteria
    onClick: (item: Options | Criteria) => void
}
export const SuggestionItem = ({
    suggestionItem,
    onClick,
}: SuggestionItemProps) => {
    return (
        <div
            className="box-border flex items-center p-2 mt-4 rounded-lg border border-neutral-300 border-solid cursor-pointer md:p-3 md:h-11"
            onClick={() => onClick(suggestionItem)}
        >
            <UilPlusCircle
                className={
                    'mr-2 min-w-[20px] min-h-[20px] cursor-pointer fill-neutral-300 hover:fill-primary md:mr-3'
                }
            />
            <span className="text-sm font-normal text-neutral-700 dark:text-neutralDark-150 truncate">
                {suggestionItem.name}
            </span>
        </div>
    )
}
