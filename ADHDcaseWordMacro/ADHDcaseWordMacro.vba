Sub ADHDcaseWordMacro()

    Dim rng As Range
    Dim wrd As Range
    Dim i As Integer
    Dim hasVowel As Boolean

    ' If there's no text selected, exit sub
    If Selection.Type <> wdSelectionNormal Then
        MsgBox "No text selected. Please select some text.", vbInformation
        Exit Sub
    End If

    ' Assign the selected text range to rng
    Set rng = Selection.Range

    ' Iterate through each word
    For Each wrd In rng.Words
        hasVowel = False
        For i = 1 To Len(wrd.Text)
            ' Check if character is a vowel
            If InStr("aeiouAEIOU", Mid(wrd.Text, i, 1)) > 0 Then
                hasVowel = True
            ElseIf hasVowel Then
                ' Make the first syllable bold
                wrd.Start = wrd.Start
                wrd.End = wrd.Start + i - 1
                wrd.Font.Bold = True
                Exit For
            End If
        Next i
    Next wrd

End Sub

Sub ADHDcaseWordMacroForWholeDocument()

    ' Select the whole document
    ActiveDocument.Content.Select

    ' Call the ADHDcaseWordMacro
    ADHDcaseWordMacro

End Sub
